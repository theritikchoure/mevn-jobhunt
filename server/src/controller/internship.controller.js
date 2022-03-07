const { createResponse, createError } = require('../utils/helpers');
const InternshipService = require('../services/internship.service');
const EmployerService = require('../services/employer.service');

class InternshipController {
  /**
   * @description create new internship
   */
  async create(req, res) {
    try {
      req.body.employer = req.user._id;
      let internship = await InternshipService.addNewInternship(req.body);
      let postedInternship = await EmployerService.addPostedInternship({employer: req.user._id, internship: internship.id})

      if (internship && postedInternship) {
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
      let internship = await InternshipService.updateInternship(req.user._id, req.params.url, req.body );

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
      let internship = await InternshipService.deleteInternship(req.user._id, req.params.url);

      if (internship) {
        createResponse(res, 'ok', 'Internship deleted successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to delete internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description update internship status
   */
  async updateStatus(req, res) {
    try {
      let internship = await InternshipService.updateStatus(req.user._id, req.params.url);

      if (internship) {
        createResponse(res, 'ok', 'Internship status updated successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to update status, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description apply to an internship
   */
  async applyToInternship(req, res) {
    try {
      let internship = await InternshipService.applyToInternship(req.user._id, req.params.url);

      if (internship) {
        createResponse(res, 'ok', 'Applied successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to apply, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description like/unlike to an internship
   */
  async likeUnlikeToInternship(req, res) {
    try {
      let internship = await InternshipService.likeUnlikeToInternship(req.user._id, req.params.url);

      if (internship) {
        createResponse(res, 'ok', 'Like/Unlike to internship successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to like/unlike to internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description shortlist student
   */
  async shortlistStudent(req, res) {
    try {
      let internship = await InternshipService.shortlistStudent(req.params);

      if (internship) {
        createResponse(res, 'ok', 'Shortlist student successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to fetch applied internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description all application of an internship
   */
  async allApplicationOfAnInternship(req, res) {
    try {
      let internship = await InternshipService.allApplicationOfAnInternship(req.params.id);

      if (internship) {
        createResponse(res, 'ok', 'All applications fetched successfully', internship);
      } else {
        createError(res, {}, { message: 'Unable to fetch applications, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const internshipController = new InternshipController();
module.exports = internshipController;
