const { hashSync, compareSync, genSaltSync } = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { EXPRESS_SECRET } = require('../config/env');

const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    is_mobile_verified: {
        type: Number,
        required: false,
        default:0
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'student'
    },

    linkedin:{
        type:String,
        required:false,
    },

    country: {
        type: String,
        required: false,
        default: "India"
    },

    state: {
        type: String,
        required: false,
        default: "Maharashtra"
    },

    city: {
        type: String,
        required: false,
        default: "Mumbai"
    },

    gender: {
        type: String,
        required: false,
        default: "male"
    },

    avatar: {
        type: String,
        required: false,
        default: "https://th.bing.com/th/id/OIP.PoxGPLWyZweUtMO11kmbxQAAAA?pid=ImgDet&rs=1"
    },

    about: {
        type: String,
        required: false
    },

    liked_internship: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internships"
    }],

    resetPasswordToken: String,
    resetPasswordExpire: Date,

    mobileOtp: String,
    mobileOtpExpire: Date,

    is_active: {
      type: Number,
      required: false,
      default: 1 // 1 for TRUE || 0 for FALSE
    },
  },
  { timestamps: true, usePushEach: true }, // UTC format
);

studentSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.extra1 = this.password;
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

studentSchema.pre('findOneAndUpdate', function(next) {
  const query = this;
  const update = query.getUpdate();
  if (update.password) {
    update.extra1 = update.password;
    update.password = hashSync(update.password, genSaltSync(8), null);
    return next();
  }
  return next();
});

studentSchema.methods = {
  authenticateStudent(password) {
    console.log(password, this.password)
    return compareSync(password, this.password);
  },

  _hashPassword(password) {
    return hashSync(password, genSaltSync(8), null);
  },

  createToken() {
    return jwt.sign(
      {
        id: this._id,
        name: this.name,
        email: this.email,
        role: this.role,
      },
      EXPRESS_SECRET,
      { expiresIn: 5184000 },
    );
  },

  toAuthJSON() {
    return {
      id: this._id,
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar,
      created_at: this.created_at,
      country: this.country, 
      state: this.state,
      liked_internship: this.liked_internship,
      token: `${this.createToken()}`,
    };
  },

  // toJSON() {
  //   return {
  //     id: this._id,
  //     name: this.name,
  //     email: this.email,
  //     role: this.role,
  //   };
  // },

  // toJSONWithObject(hasFullUser = false) {
  //   return {
  //     id: this._id,
  //     name: this.name,
  //     email: this.email,
  //     role: this.role,
  //   };
  // },
};
module.exports = mongoose.model('Students', studentSchema);
