const { createResponse, createError } = require('../utils/helpers');
const EmployerService = require('../services/employer.service');

class EmployerController {

  /**
   * @description get employer by url
   */
  async getByURL(req, res) {
    try {
      let employer = await EmployerService.getByURL(req.params.url);

      if (employer) {
        createResponse(res, 'ok', 'employer fetched successfully', employer);
      } else {
        createError(res, {}, { message: 'Unable to fetched employer details, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const employerController = new EmployerController();
module.exports = employerController;
