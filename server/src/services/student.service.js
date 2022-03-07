const Student = require('../models/student.model.js');
const Internship = require('../models/internship.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class StudentService {
  /**
   * @description Get Student by Id
   */
  async getStudent(id) {
    try {
      const result = await Student.findOne({ _id: id });
      return result;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get Student By Email
   */
  async getStudentByEmail(email) {
    const valid_email = String(email)
      .toUpperCase()
      .trim();
    const student = await Student.findOne({ email: valid_email });
    return student;
  }

  /**
   * @description Validate Student's Credentials
   */
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

  /**
   * @description Update Profile
   * @param {Object} obj
   * @param {id} id
   */
  async updateProfile(userId, payload) {
    try {
      if (!payload) return;

      const body = filteredBody(payload, constants.WHITELIST.student.update);
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: userId };
        await Student.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getStudent(userId);
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
      const isValidate = await this.validateStudentCredential(user.email, oldPassword);
      if(isValidate == null) {
        throw Error("Invalid Credentials");
      }

      const body = filteredBody(payload, constants.WHITELIST.user.updatePassword);
      body.password = body.new_password;
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: user.id };
        await Student.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getStudent(user.id);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }
}

const studentService = new StudentService();
module.exports = studentService;
