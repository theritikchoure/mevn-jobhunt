const { createResponse, createError } = require('../utils/helpers');
const StudentService = require('../services/student.service');
const EmployerService = require('../services/employer.service');

class AuthController {
  /**
   * @description Sign in with email and password
   */
  async login(req, res) {
    try {
      const { email, password, user_type } = req.body;
      let user;
      if(user_type === 'student') {
        user = await StudentService.validateStudentCredential(email, password);
      } else if(user_type === 'employer'){
        user = await EmployerService.validateEmployerCredential(email, password);
      }

      if (user) {
        createResponse(res, 'ok', 'Login successful', user);
      } else {
        createError(res, {}, { message: 'Invalid Credentials' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description signup new user
   */
  async register(req, res) {
    try {
      const { email, password, user_type } = req.body;
      let user;
      if(user_type === 'student') {
        user = await StudentService.addNewStudent(req.body);
      } else if(user_type === 'employer') {
        user = await EmployerService.addNewEmployer(req.body);
      }
      if (user) {
        createResponse(res, 'ok', 'Signup successful', user);
      } else {
        createError(res, {}, { message: 'Unable to create new user,please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description get loggedin student profile
   */
  async loggedInUserProfile(req, res) {
    try {
      let response;
      if(req.user.role == 'student') {
        response = await StudentService.getStudent(req.user._id);
      } else if(req.user.role == 'employer') {
        response = await EmployerService.getEmployerCompleteDetails(req.user._id);
      }
      
      if (response) {
        createResponse(res, 'ok', 'Profile Fetched successfully', response);
      } else {
        createError(res, {}, { message: 'Unable to fetch profile, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }

  /**
   * @description update employer profile
   */
  async profileUpdate(req, res) {
    try {
      let response;
      if(req.user.role == 'student') { 
        response = await StudentService.updateProfile(req.user._id, req.body );
      } else if(req.user.role == 'employer') {
        response = await EmployerService.updateProfile(req.user._id, req.body );
      }

      if (response) {
        createResponse(res, 'ok', 'Profile updated successfully', response);
      } else {
        createError(res, {}, { message: 'Unable to update profile, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
  /**
   * @description update user's profile
   */
  async changePassword(req, res) {
    try {
      let response;
      if(req.user.role == 'student') {
        response = await StudentService.changePassword(req.user._id, req.body);
      } else if(req.user.role == 'employer') {
        response = await EmployerService.changePassword(req);
      }

      if (response) {
        createResponse(res, 'ok', 'Password updated successfully', response);
      } else {
        createError(res, {}, { message: 'Unable to change password, please try again' });
      }
    } catch (e) {
      createError(res, e);
    }
  }
  
}

const authController = new AuthController();
module.exports = authController;
