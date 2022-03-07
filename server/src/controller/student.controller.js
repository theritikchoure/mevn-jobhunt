const { createResponse, createError } = require('../utils/helpers');
const StudentService = require('../services/student.service');
const InternshipService = require('../services/internship.service');

class StudentController {

  /**
   * @description get student by id
   */
  async getByID(req, res) {
    try {
      let student = await StudentService.getStudent(req.params.id);

      if (student) {
        createResponse(res, 'ok', 'student fetched successfully', student);
      } else {
        createError(res, {}, { message: 'Unable to fetched internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
 * @description GET student's applied job
 */
  async appliedJobs(req, res) {
    try {
      let internship = await InternshipService.getInternshipByApplicants(req.user._id);

      if (internship) {
        createResponse(res, 'ok', 'Applied Internships', internship);
      } else {
        createError(res, {}, { message: 'Unable to fetch applied internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
 * @description GET student's shortlisted job
 */
  async shortListedInternships(req, res) {
    try {
      let internship = await InternshipService.getInternshipByApplicants(req.user._id);

      console.log(internship);

      if (internship) {
        createResponse(res, 'ok', 'Shortlisted Internships', internship);
      } else {
        createError(res, {}, { message: 'Unable to fetch applied internship, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const studentController = new StudentController();
module.exports = studentController;
