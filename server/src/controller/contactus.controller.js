const { createResponse, createError } = require('../utils/helpers');
const ContactusService = require('../services/contactus.service');

class ContactusController {
  /**
   * @description create new contact
   */
  async create(req, res) {
    try {
      let contact = await ContactusService.addNewContact(req.body);

      if (contact) {
        createResponse(res, 'ok', 'Contact created successfully', contact);
      } else {
        createError(res, {}, { message: 'Unable to create new contact, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description get all contacts
   */
  async getAll(req, res) {
    try {
      let contacts = await ContactusService.getContacts();

      if (contacts) {
        createResponse(res, 'ok', 'Contact fetched successfully', contacts);
      } else {
        createError(res, {}, { message: 'Unable to fetched contacts, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description get a contact by url
   */
  async getByUrl(req, res) {
    try {
      let contact = await ContactusService.getContactByUrl(req.params.url);

      if (contact) {
        createResponse(res, 'ok', 'Contact fetched successfully', contact);
      } else {
        createError(res, {}, { message: 'Unable to fetched contact, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description update contact
   */
  async update(req, res) {
    try {
      let contact = await ContactusService.updateContact(req.user._id, req.params.id, req.body );

      if (contact) {
        createResponse(res, 'ok', 'Contact updated successfully', contact);
      } else {
        createError(res, {}, { message: 'Unable to update contact, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description update contact
   */
  async delete(req, res) {
    try {
      let contact = await ContactusService.deleteContact(req.user._id, req.params.id);

      if (contact) {
        createResponse(res, 'ok', 'Contact deleted successfully', contact);
      } else {
        createError(res, {}, { message: 'Unable to delete contact, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const contactusController = new ContactusController();
module.exports = contactusController;
