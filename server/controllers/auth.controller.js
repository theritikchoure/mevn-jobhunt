const jwt = require("jsonwebtoken");
const config = require("../config/config");
const crypto = require("crypto");
const Student = require('../models/student.model');
const Employer = require('../models/employer.model');
const loginAct = require("../models/userLoginActivity.model");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { generateotp } = require("../utils/sendOTP");
const sendMail = require("../utils/sendMail");
const smsClient = require("../utils/textLocal");

const customResponse = require('../middleware/response-handler');
const { resMsgType, resMsg } = require("../config/constant");

const { loginSchema, userRegisterSchema } = require("../utils/validationSchema");

module.exports = { register, login, get };

async function get(req, res, next) {
  try {
    const student = await Student.find({});
    const employer = await Employer.find({})
    return customResponse(res, 200, resMsgType.WARNING, resMsg.SUCCESS, { student, employer });
  } catch (error) {
    console.log(error)
    return customResponse(res, 500, resMsgType.WARNING, error.message, null)
  }
}

async function register(req, res, next) {
  try {

    try {
      const value = await userRegisterSchema.validateAsync(req.body);
    }
    catch (error) { 
      return customResponse(res, 403, resMsgType.WARNING, error.message, null)
    }
    
    const UserModel = req.body.user_type === "student" ? Student : Employer ;
    const { email, mobile } = req.body
    let user = await UserModel.findOne({email}) || await UserModel.findOne({mobile})
    if(user) return customResponse(res, 409, resMsgType.WARNING, resMsg.DUPLICATE_DATA, null);
    
    user = await UserModel.create(req.body);
    const token = await user.generateToken(user);
    return customResponse(res, 201, resMsgType.SUCCESS, resMsg.LOGIN, { user, token })

  } catch (error) {
    console.log(error)
    return customResponse(res, 500, resMsgType.WARNING, error.message, null)
  }
}

async function login(req, res) {
  try {

    try {
      const value = await loginSchema.validateAsync(req.body);
    }
    catch (error) { 
      return customResponse(res, 403, resMsgType.WARNING, error.message, null)
    }

    console.log(req.body)

    const { email, password, remember_me } = req.body;

    const UserModel = req.body.user_type === "student" ? Student : Employer ;
    const user = await UserModel.findOne({email}).select('+password');

    if(!user) return customResponse(res, 404, resMsgType.WARNING, resMsg.INVALID, null)
    
    const isPasswordMatch = await user.matchPassword(password);
    console.log(isPasswordMatch)
    if(!isPasswordMatch) return customResponse(res, 404, resMsgType.WARNING, resMsg.INVALID, null)

    const token = await user.generateToken(user, remember_me);
    return customResponse(res, 200, resMsgType.SUCCESS, resMsg.LOGIN, { user, token })
      
  } catch (error) {
      console.log(error);
      return customResponse(res, 500, resMsgType.WARNING, error.message, null)
  }
}