const { createResponse, createError } = require('../utils/helpers');
const InternshipService = require('../services/internship.service');

class InternshipController {
  /**
   * @description create new internship
   */
  async create(req, res) {
    try {
      req.body.employer = req.user._id;
      let internship = await InternshipService.addNewInternship(req.body);

      if (internship) {
        createResponse(res, 'ok', 'Internship created successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to create new internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description get all internships
   */
  async getAll(req, res) {
    try {
      let internships = await InternshipService.getInternships();

      if (internships) {
        createResponse(res, 'ok', 'Internship fetched successfully', internships);
      } else {
        createError(res, {}, { message: 'Unable to fetched internships, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description get a internship by url
   */
  async getByUrl(req, res) {
    try {
      let internship = await InternshipService.getInternshipByUrl(req.params.url);

      if (internship) {
        createResponse(res, 'ok', 'Internship fetched successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to fetched internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description update internship
   */
  async update(req, res) {
    try {
      let internship = await InternshipService.updateInternship(req.user._id, req.params.id, req.body );

      if (internship) {
        createResponse(res, 'ok', 'Internship updated successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to update internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description update internship
   */
  async delete(req, res) {
    try {
      let internship = await InternshipService.deleteInternship(req.user._id, req.params.id);

      if (internship) {
        createResponse(res, 'ok', 'Internship deleted successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to delete internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const internshipController = new InternshipController();
module.exports = internshipController;
