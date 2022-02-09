const Student = require('../models/student.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class StudentService {
  /**
   * @description Get Student
   */
  async getStudent(id) {
    try {
      const result = await Student.findOne({ _id: id });
      return result.toJSONWithObject(true);
    } catch (e) {
      throw e;
    }
  }

  async getStudentByEmail(email) {
    const valid_email = String(email)
      .toUpperCase()
      .trim();
    const student = await Student.findOne({ email: valid_email });
    return student;
  }

  async validateStudentCredential(email, password) {
    const valid_email = String(email).toLowerCase().trim();
    const student = await Student.findOne({ email: valid_email });

    if (student && student.authenticateStudent(password)) {
      return student.toAuthJSON();
    }
    return null;
  }

  /**
   * @description Add new Student
   * @param {Object} obj
   */
  addNewStudent(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = filteredBody(obj, constants.WHITELIST.user.register);
        body.email = String(body.email).toLowerCase();
        Student.findOne(
          {
            $or: [
              {
                email: body.email,
              },
            ],
          },
          (err, existingStudent) => {
            if (err) {
              reject(err);
              return;
            }

            // If student is not unique, return error
            if (existingStudent) {
              reject({
                message: 'That email is already in use.',
              });
              return;
            }

            // If studentname is unique and password was provided, submit account
            const student = new Student({
              ...body,
              name: body.name,
              extra1: body.password,
              email: String(body.email).toLowerCase(),
            });

            student.save((err2, item) => {
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
      const result = await Student.find({ role }).populate([{ path: 'shop' }]);
      if (result) {
        return result.map((item) => item.toJSON());
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  async updateStampsForStudent(id, payload) {
    try {
      if (!payload) return;
      const existingItem = await this.getStudent(id);
      if (!existingItem) throw Error('Student not exists');

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
        Student.findOneAndUpdate(condition, doc, async (err) => {
          if (err) reject(err);
          return resolve(true);
        });
      });
      if (promiseResult) {
        const student = await this.getStudent(id);
        if (student) return student;
      }
      return;
    } catch (e) {
      throw e;
    }
  }
}

const studentService = new StudentService();
module.exports = studentService;
