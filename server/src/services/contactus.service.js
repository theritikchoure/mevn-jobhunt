const Contact = require('../models/contactus.model.js');
const constants = require('../config/constants');
const filteredBody = require('../utils/filteredBody');

class ContactusService {
  /**
   * @description Get All Contact
   */
  async getContacts() {
    try {
      const result = await Contact.find({}).sort({createdAt: -1});
      if(result) return result
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get A Contact by Id
   */
  async getContactById(id) {
    try {
      const result = await Contact.findOne({ _id: id });
      if(result) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get A Contact by Url
   */
  async getContactByUrl(url) {
    try {
      const result = await Contact.findOne({ url: url });
      if(result) return result.toJSON();
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  async getContactByEmployer(id) {
    const contact = await Contact.find({ employer: id });
    if(contact) return contact.toJSON();
    return undefined;
  }
  
  async getContactByApplicants(id) {
    const contact = await Contact.find({ applicants: id });
    if(contact) return contact.toJSON();
    return undefined;
  }

  /**
   * @description Add new Contact
   * @param {Object} obj
   */
  addNewContact(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = filteredBody(obj, constants.WHITELIST.contact.create);
        // If contact url is unique, create contact
        const contact = new Contact({
          ...body,
        });

        contact.save((err, item) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(item.toJSON());
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  
  /**
   * @description Update contact
   * @param {Object} obj
   * @param {id} id
   */
   async updateContact(userId, id, payload) {
    try {
      if (!payload) return;
      const contact = await this.getContactById(id);
      if(userId.toString() !== contact.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const body = filteredBody(payload, constants.WHITELIST.contact.create);
      body.updatedAt = Date.now();
      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: id };
        await Contact.findOneAndUpdate(query, body, { new: false }, (err, result) => {
          if (err) reject(err);
          return resolve(result);
        });
      });
      const result = await updatePromise;
      if (result) {
        const item = await this.getContactById(id);
        return item;
      }
      return undefined;
    } catch (e) {
      throw e;
    }
  }
  
  /**
   * @description Delete contact
   * @param {userId} user id
   * @param {id} id
   */
   async deleteContact(userId, id) {
    try {
      const contact = await this.getContactById(id);
      if (!contact) throw Error('Contact not found');
      
      if(userId.toString() !== contact.employer.toString()) {
        reject({
          message: 'Unauthorized',
        });
      }

      const updatePromise = new Promise(async (resolve, reject) => {
        const query = { _id: id };
        await Contact.findOneAndDelete(query, (err, result) => {
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
}

const contactusService = new ContactusService();
module.exports = contactusService;
