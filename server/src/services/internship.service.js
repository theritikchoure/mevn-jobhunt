const Internship = require('../models/internship.model.js');
const Student = require('../models/student.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class InternshipService {
  /**
   * @description Get All Internship
   */
  async getInternships() {
    try {
      const result = await Internship.find({})
        .populate('employer')
        .populate('applicants')
        .sort({ createdAt: -1 });
      if (result) return result;
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get A Internship by Id
   */
  async getInternshipById(id) {
    try {
      const result = await Internship.findOne({ _id: id });
      if (result) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get A Internship by Url
   */
  async getInternshipByUrl(url) {
    try {
      const result = await Internship.findOne({ url: url }).populate('employer');
      if (result !== null) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  async getInternshipByEmployer(id) {
    const internship = await Internship.find({ employer: id });
    if (internship) return internship.toJSON();
    return undefined;
  }

  async getInternshipByApplicants(id) {
    const internship = await Internship.find({ 'applications.applicant':  id });
    if (internship) return internship;
    return undefined;
  }
  
  async allApplicationOfAnInternship(id) {
    const internship = await Internship.findById(id).populate('applications.applicant');
    if (internship) return internship;
    return undefined;
  }

  /**
   * @description Add new Internship
   * @param {Object} obj
   */
  addNewInternship(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = filteredBody(obj, constants.WHITELIST.internship.create);
        body.url = body.title.replace(/ /g, '-').toLowerCase();
        Internship.findOne(
          {
            $or: [
              {
                url: body.url,
              },
            ],
          },
          (err, existingInternship) => {
            if (err) {
              reject(err);
              return;
            }

            // If internship is not unique, return error
            if (existingInternship) {
              reject({
                message: 'That title is already in use.',
              });
              return;
            }

            // If internship url is unique, create internship
            const internship = new Internship({
              ...body,
              url: String(body.url).toLowerCase(),
            });

            internship.save((err2, item) => {
              if (err2) {
                reject(err2);
                return;
              }
              resolve(item.toJSON());
            });
          },
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * @description Update internship
   * @param {Object} obj
   * @param {id} id
   */
  async updateInternship(userId, url, payload) {
    try {
      if (!payload) return;
      const internship = await this.getInternshipByUrl(url);
      if (userId.toString() !== internship.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const body = filteredBody(payload, constants.WHITELIST.internship.create);
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { url };
        await Internship.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getInternshipById(id);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Delete internship
   * @param {userId} user id
   * @param {url} url
   */
  async deleteInternship(userId, url) {
    try {
      const internship = await this.getInternshipByUrl(url);
      if (!internship) throw Error('Internship not found');

      if (userId.toString() !== internship.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { url };
        await Internship.findOneAndDelete(query, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) return true;
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Update internship status
   * @param {Object} obj
   * @param {url} url
   */ 
  async updateStatus(userId, url) {
    try {
      if (!payload) return;
      const internship = await this.getInternshipByUrl(url);
      if (userId.toString() !== internship.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }
      
      body.status = internship.status === 1 ? 0 : 1;
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { url };
        await Internship.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getInternshipByUrl(url);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description apply to an internship
   * @param {Object} obj
   * @param {id} id
   */
  async applyToInternship(userId, url) {
    try {
      const internship = await this.getInternshipByUrl(url);
      if (!internship) throw Error('Internship not found');

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { url: url };
        await Internship.findOne(query, { new: false }, async (err, result) => {
          if (err) reject(err);

          const userExists = result.applications.find((element) => element.applicant.toString() === userId.toString());

          if (userExists) {
            const index = result.applications.indexOf(userExists);
            result.applications.splice(index, 1);
            await result.save();
          } else {
            let object = {
              applicant: userId,
            }
            result.applications.push(object);
            await result.save();
          }
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getInternshipByUrl(url);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description like/unlike to an internship
   * @param {Object} obj
   * @param {id} id
   */
  async likeUnlikeToInternship(userId, url) {
    try {
      const internship = await this.getInternshipByUrl(url);
      if (!internship) throw Error('Internship not found');

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: userId };
        await Student.findOne(query, { new: false }, async (err, result) => {
          if (err) reject(err);
          console.log(result);
          if (result.liked_internship.includes(internship.id)) {
            const index = result.liked_internship.indexOf(internship.id);

            result.liked_internship.splice(index, 1);

            await result.save();
          } else {
            result.liked_internship.push(internship.id);
            await result.save();
          }
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await Student.findOne({ _id: userId });
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }
  
  /**
   * @description shortlist student
   * @param {Object} obj
   */
  async shortlistStudent(obj) {
    try {
      const userId = obj.id;
      const url = obj.url;
      const internship = await this.getInternshipByUrl(obj.url);
      if (!internship) throw Error('Internship not found');

      // TODO - check student exists or not

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { url: obj.url };
        await Internship.findOne(query, { new: false }, async (err, result) => {
          if (err) reject(err);

          const userExists = result.applications.find((element) => element.applicant.toString() === obj.id.toString());

          if (!userExists) throw Error('Applicant is not found');

          result.applications.forEach((element) => {
            if (element.applicant == userId) {
              element.isShortListed = element.isShortListed === 0 ? 1 : 0 ;
            }
          });

          await result.save();
        
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getInternshipByUrl(obj.url);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }
}

const internshipService = new InternshipService();
module.exports = internshipService;
