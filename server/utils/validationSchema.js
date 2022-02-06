const Joi = require("joi");

// User Schema - Insert
const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    mobile: Joi.string().required().regex(/^[1-9][0-9]{9}$/),
    password: Joi.string().required(),
    repeat_password: Joi.string().required().valid(Joi.ref('password')),
    user_type: Joi.string().required(),
});

//Email Login Schema
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    user_type: Joi.string().required(),
    remember_me: Joi.boolean().required()
})

// Login OTP Schema
const loginOtpSchema = Joi.object({
    mobile: Joi.string()
      .required()
      .regex(/^[1-9][0-9]{9}$/),
});

// Verify OTP Schema
const verifyOtpSchema = Joi.object({
    mobile: Joi.string()
        .required()
        .regex(/^[1-9][0-9]{9}$/),
    otp: Joi.string()
        .required()
        .regex(/^[0-9][0-9]{5}$/),
    // agent: Joi.string(),
    // ip: Joi.string(),
    // latitude: Joi.string().allow(null, ""),
    // longitude: Joi.string().allow(null, ""),
});

module.exports = { userRegisterSchema, loginSchema, loginOtpSchema, verifyOtpSchema }

// // User Schema - Update
// const updateUserSchema = Joi.object({
//     first_name: Joi.string(),
//     last_name: Joi.string(),
//     email: Joi.string().email(),
//     mobile: Joi.string().regex(/^[1-9][0-9]{9}$/),
//     role: Joi.string(),
//     gender: Joi.string().valid(...['male','female']),
//     speciality: Joi.string(),
//     country: Joi.string(),
//     state: Joi.string(),
//     city: Joi.string(),
//     about_me: Joi.string(),
//     is_speaker: Joi.number(),
//     is_user: Joi.number(),
//     is_admin: Joi.number(),
//     is_sponsor: Joi.number(),
//     is_moderator: Joi.number(),
//     profile_img: Joi.string(),
// });

// // Reset Password Schema
// const resetPasswordSchema = Joi.object({
//     password: Joi.string().required(),
//     repeat_password: Joi.string().required().valid(Joi.ref("password")),
// });
  

// // Forgot Password Schema
// const forgetPasswordSchema = Joi.object({
//     email: Joi.string().required(),
// });

// // Update Me Schema
// const updateMeSchema = Joi.object({
//     first_name: Joi.string(),
//     last_name: Joi.string(),
//     email: Joi.string().email(),
//     mobile: Joi.string().regex(/^[1-9][0-9]{9}$/),
//     speciality: Joi.string(),
//     country: Joi.string(),
//     state: Joi.string(),
//     city: Joi.string(),
//     gender: Joi.string().valid(...["male", "female"]),
//     about_me: Joi.string(),
//     hospital_details: Joi.string(),
//     med_council_reg_no: Joi.string(),
//     rcs_publication_details: Joi.string(),
//     additional_qualifications: Joi.string(),
//     profile_img: Joi.string(),
// });

// // Change Mobile Schema
// const changeMobileSchema = Joi.object({
//     mobile: Joi.string()
//         .required()
//         .regex(/^[1-9][0-9]{9}$/),
//     otp: Joi.string()
//         .required()
//         .regex(/^[0-9][0-9]{5}$/),
// });