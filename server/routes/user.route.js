// const express = require('express');
// const asyncHandler = require('express-async-handler')
// const userCtrl = require('../controllers/user.controller');
// const customResponse = require('../middleware/response-handler');
// const {resMsgType, resMsg} = require('../config/constant');
// const passport = require('passport');
// const adminAuth = require('../middleware/require-admin');
// const router = express.Router();
// const User = require('../models/user.model');

// const { insert } = require('../controllers/user.controller')

// module.exports = router;

// // User CRUD Operation Routes
// router.post('/', asyncHandler(insert)); // Create A User
// router.get('/', passport.authenticate('jwt', { session: false }), adminAuth, asyncHandler(getAllUser)); // Retrieve All User
// router.get('/:userId', passport.authenticate('jwt', { session: false }), adminAuth, asyncHandler(getSingleUser)); // Retrieve Single User
// router.put('/:userId', passport.authenticate('jwt', { session: false }), adminAuth, asyncHandler(updateSingleUser)); // Update Single User
// router.delete('/:userId', passport.authenticate('jwt', { session: false }), adminAuth, asyncHandler(deleteSingleUser)); // Delete Single User

// // Create A User
// async function register(req, res, next) {
//     try{
//         let user = await userCtrl.insert(req.body);
//         user = user.toObject();
//         delete user.hashedPassword;
//         customResponse(res,201, resMsgType.SUCCESS,resMsg.CREATED, { user });
//     }catch(e){
//         customResponse(res,500, resMsgType.ERROR,resMsg.SWR, e.message);
//     }
// }

// // Get All Users -- ritik
// async function getAllUser(req, res, next) {
//     try{
//         let users = await User.find();
//         if(users.length) 
//         customResponse(res,200, resMsgType.SUCCESS,resMsg.SUCCESS_FETCH, users);  
//         else
//             customResponse(res,400, resMsgType.WARNING,resMsg.NO_DATA_FOUND, null); 
//     }catch(e){
//         customResponse(res,500, resMsgType.ERROR,resMsg.SWR, e.message);
//     }
// }

// // Get Single Users -- ritik
// async function getSingleUser(req, res, next) {
//     try{
//         let user = await User.findById(req.params.userId);
//         if (!user) return customResponse(res,400, resMsgType.WARNING,resMsg.NO_DATA_FOUND, null);
//         return customResponse(res,200, resMsgType.SUCCESS,resMsg.SUCCESS_FETCH, user);  
//     }catch(e){
//         return customResponse(res,500, resMsgType.ERROR,resMsg.SWR, e.message);
//     } 
// }

// // Update Single Users -- ritik
// async function updateSingleUser(req, res, next) {
//     try{
//         let user = { id: req.params.userId, body: req.body}
//         let updatedUser = await userCtrl.updateUser(user);
//         if(!updatedUser) { customResponse(res,400, resMsgType.WARNING,resMsg.NO_DATA_FOUND, null); }
//         return customResponse(res,200, resMsgType.SUCCESS,resMsg.UPDATED, updatedUser);
//     }catch(e){
//         customResponse(res,500, resMsgType.ERROR,resMsg.SWR, e.message);
//     }
// }

// // Delete Single Users -- ritik
// async function deleteSingleUser(req, res, next) {
//     try{
//         const user = await User.findById(req.params.userId);
//         if (!user) customResponse(res,400, resMsgType.WARNING,resMsg.NO_DATA_FOUND, null);
//         await user.remove();
//         return customResponse(res,200, resMsgType.SUCCESS,resMsg.DELETED, null);
//     }catch(e){
//         customResponse(res,500, resMsgType.ERROR,resMsg.SWR, e.message);
//     }
// }

// // Import User for Pre-Registration -- ritik
// async function importUsers(req, res, next) {
//     const cmime = mime.contentType(path.extname(__dirname + '/uploads/' + req.file.filename));
//     if(cmime !== 'text/csv; charset=utf-8'){ 
//         return customResponse(res,401, resMsgType.ERROR,"File Type Should Be CSV", null);
//     }

//     const dirName = path.join(__dirname, "../");
//     // console.log(dirName + '/uploads/' + req.file.filename)
//     const result = await userCtrl.importUsers(dirName + '/uploads/' + req.file.filename);

//     if(result) return customResponse(res,201, resMsgType.SUCCESS,"Data Imported Successfully", null);    
// }