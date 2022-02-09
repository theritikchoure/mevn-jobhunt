const Employer = require('../models/employer.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class EmployerService {
  /**
   * @description Get Employer
   */
  async getEmployer(id) {
    try {
      const result = await Employer.findOne({ _id: id });
      return result.toJSONWithObject(true);
    } catch (e) {
      throw e;
    }
  }

  async getEmployerByEmail(email) {
    const valid_email = String(email)
      .toUpperCase()
      .trim();
    const employer = await Employer.findOne({ email: valid_email });
    return employer;
  }

  async validateEmployerCredential(email, password) {
    const valid_email = String(email).toLowerCase().trim();
    const employer = await Employer.findOne({ email: valid_email });

    if (employer && employer.authenticateEmployer(password)) {
      return employer.toAuthJSON();
    }
    return null;
  }

  /**
   * @description Add new Employer
   * @param {Object} obj
   */
  addNewEmployer(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = filteredBody(obj, constants.WHITELIST.user.register);
        body.email = String(body.email).toLowerCase();
        Employer.findOne(
          {
            $or: [
              {
                email: body.email,
              },
            ],
          },
          (err, existingEmployer) => {
            if (err) {
              reject(err);
              return;
            }

            // If employer is not unique, return error
            if (existingEmployer) {
              reject({
                message: 'That email is already in use.',
              });
              return;
            }

            // If employername is unique and password was provided, submit account
            const employer = new Employer({
              ...body,
              name: body.name,
              extra1: body.password,
              email: String(body.email).toLowerCase(),
            });

            employer.save((err2, item) => {
              if (err2) {
                reject(err2);
                return;
              }
              resolve(item.toAuthJSON());
            });
          },
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  async getByRole(role) {
    try {
      const result = await Employer.find({ role }).populate([{ path: 'shop' }]);
      if (result) {
        return result.map((item) => item.toJSON());
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  async updateStampsForEmployer(id, payload) {
    try {
      if (!payload) return;
      const existingItem = await this.getEmployer(id);
      if (!existingItem) throw Error('Employer not exists');

      let stamp_items = existingItem.stamp_items || [];
      // check if same spree Id exists add the stamps in the existing one
      // if not exists add new obj
      let stamp_item_index = stamp_items.findIndex((x) => String(x.spree) === String(payload.spree));
      if (stamp_item_index !== -1) {
        let item = stamp_items[stamp_item_index];
        item.stamps = Number(item.stamps) + Number(payload.stamps);
      } else {
        stamp_items.push(payload);
      }

      const condition = {
        _id: id,
      };

      const doc = {
        stamp_items,
      };

      const promiseResult = await new Promise(async (resolve, reject) => {
        Employer.findOneAndUpdate(condition, doc, async (err) => {
          if (err) reject(err);
          return resolve(true);
        });
      });
      if (promiseResult) {
        const employer = await this.getEmployer(id);
        if (employer) return employer;
      }
      return;
    } catch (e) {
      throw e;
    }
  }
}

const employerService = new EmployerService();
module.exports = employerService;
