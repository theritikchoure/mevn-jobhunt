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
      return result
    } catch (e) {
      throw e;
    }
  }
  
  /**
   * @description Get Employer complete details along with populated posted internships
   */
  async getEmployerCompleteDetails(id) {
    try {
      const result = await Employer.findOne({ _id: id }).populate('posted_internships');
      return result
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
   * @description Add internship id into emplyer's posted_internships field
   * @param {Object} obj
   */
  async addPostedInternship(obj) {
    const employer = await Employer.findById(obj.employer);

    if (employer) {
      employer.posted_internships.push(obj.internship)
      await employer.save();
      return true;
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

  /**
   * @description Update Profile
   * @param {Object} obj
   * @param {id} id
   */
  async updateProfile(userId, payload) {
    try {
      if (!payload) return;

      const body = filteredBody(payload, constants.WHITELIST.employer.update);
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: userId };
        await Employer.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getEmployer(userId);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }
  
  /**
   * @description change password
   * @param {Object} obj
   * @param {id} id
   */
  async changePassword(req) {
    try {
      const user = req.user;
      const oldPassword = req.body.old_password;
      const payload = req.body;
      if (!payload) return;
      const isValidate = await this.validateEmployerCredential(user.email, oldPassword);
      if(isValidate == null) {
        throw Error("Invalid Credentials");
      }

      const body = filteredBody(payload, constants.WHITELIST.user.updatePassword);
      body.password = body.new_password;
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: user.id };
        await Employer.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getEmployer(user.id);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }

}

const employerService = new EmployerService();
module.exports = employerService;
