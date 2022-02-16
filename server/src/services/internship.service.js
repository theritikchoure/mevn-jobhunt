const Internship = require('../models/internship.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class InternshipService {
  /**
   * @description Get All Internship
   */
  async getInternships() {
    try {
      const result = await Internship.find({}).populate("employer").sort({createdAt: -1});
      if(result) return result
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
      if(result) return result.toJSON();
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
      const result = await Internship.findOne({ url: url }).populate("employer");
      if(result !== null) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  async getInternshipByEmployer(id) {
    const internship = await Internship.find({ employer: id });
    if(internship) return internship.toJSON();
    return undefined;
  }
  
  async getInternshipByApplicants(id) {
    const internship = await Internship.find({ applicants: id });
    if(internship) return internship.toJSON();
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
   async updateInternship(userId, id, payload) {
    try {
      if (!payload) return;
      const internship = await this.getInternshipById(id);
      if(userId.toString() !== internship.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const body = filteredBody(payload, constants.WHITELIST.internship.create);
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: id };
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
   * @param {id} id
   */
   async deleteInternship(userId, id) {
    try {
      const internship = await this.getInternshipById(id);
      if (!internship) throw Error('Internship not found');
      
      if(userId.toString() !== internship.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: id };
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
          console.log(result);
          if(result.applicants.includes(userId)){
            const index = result.applicants.indexOf(userId);

            result.applicants.splice(index, 1);

            await result.save();
          } else {
            result.applicants.push(userId);
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
}

const internshipService = new InternshipService();
module.exports = internshipService;
