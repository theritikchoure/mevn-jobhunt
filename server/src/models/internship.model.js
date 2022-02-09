const { hashSync, compareSync, genSaltSync } = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { DEFAULT_USER_ROLES } = require('../config/constants');
const { EXPRESS_SECRET } = require('../config/env');
const { isNull } = require('lodash');

const Schema = mongoose.Schema;

const internshipSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employer"
    },

    is_paid: {
        type: Number,
        required: true,
        default:1 // 1 is for true || 0 is for false
    },

    salary: {
        type: Number,
        required: false,
    },

    no_of_openings: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: false
    },

    last_date:{
        type:String,
        required:true,
    },

    status: {
        type: Number,
        required: false,
        default: 1 // 1 is for True || 0 is for false
    },
  },
  { timestamps: true, usePushEach: true }, // UTC format
);

internshipSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.extra1 = this.password;
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

internshipSchema.pre('findOneAndUpdate', function(next) {
  const query = this;
  const update = query.getUpdate();
  if (update.password) {
    update.extra1 = update.password;
    update.password = hashSync(update.password, genSaltSync(8), null);
    return next();
  }
  return next();
});

internshipSchema.methods = {
  authenticateStudent(password) {
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
      token: `${this.createToken()}`,
    };
  },

  toJSON() {
    return {
      id: this._id,
      name: this.name,
      email: this.email,
      role: this.role,
    };
  },

  toJSONWithObject(hasFullUser = false) {
    return {
      id: this._id,
      name: this.name,
      email: this.email,
      role: this.role,
    };
  },
};
module.exports = mongoose.model('Internships', internshipSchema);
