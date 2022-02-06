const bcrypt = require('bcryptjs');
const Joi = require('joi');
const User = require('../models/user.model');
const customResponse = require('../middleware/response-handler');

module.exports = {
  insert, getAllUser, getSingleUser, updateUser, deleteSingleUser,
}

async function insert(req, res, next) {
  user = await Joi.validate(user, userSchema, { abortEarly: true });
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  await new User(user).save();

  return customResponse(res, 201, "Success", "Data Created", user);
}

async function getAllUser() {
  return await User.find();
}

async function getSingleUser(req) {
  isUser = await User.findById(req.params.userId);
  if(!isUser) return false
  return isUser
}

async function updateUser(req) {
  const validation = await Joi.validate(req.body, updateUserSchema, { abortEarly: true });
  const updateUser = await User.findByIdAndUpdate(req.id, req.body, {new: true, runValidators: true, useFindAndModify:false});
  return updateUser;
}

async function deleteSingleUser(req) {
  isUser = await User.findById(req.params.userId);
  if(!isUser) return false
  await isUser.remove();
  return true;
}








