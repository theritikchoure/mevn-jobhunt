const { hashSync, compareSync, genSaltSync } = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { DEFAULT_USER_ROLES } = require('../config/constants');
const { EXPRESS_SECRET } = require('../config/env');
const { isNull } = require('lodash');

const Schema = mongoose.Schema;

const employerSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: 'Name is Required'
    },

    description: {
        type: String,
        required: false,
    },

    address: {
        type: String,
        required: false,
    },

    city: {
        type: String,
        required: false,
    },

    state: {
        type: String,
        required: false,
    },

    zip_code: {
        type: Number,
        required: false,
    },

    mobile: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },

    website: {
        type: String,
        required: false,
    },

    linkedin: {
        type: String,
        required: false,
    },

    logo: {
        type: String,
        required: false,
        default: "https://p7.hiclipart.com/preview/853/813/301/car-motorcycle-helmets-crash-test-dummy-sticker-car.jpg"
    },

    posted_internships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Internship"
        }
    ],

    password: {
        type: String,
        required: true,
    },

    is_active: {
        type: Number,
        required: false,
        default: 1 // 1 for TRUE || 0 for FALSE
    },

    role: {
      type: String,
      default: 'employer'
    },
  },
  { timestamps: true, usePushEach: true }, // UTC format
);

employerSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.extra1 = this.password;
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

employerSchema.pre('findOneAndUpdate', function(next) {
  const query = this;
  const update = query.getUpdate();
  if (update.password) {
    update.extra1 = update.password;
    update.password = hashSync(update.password, genSaltSync(8), null);
    return next();
  }
  return next();
});

employerSchema.methods = {
  authenticateEmployer(password) {
    console.log(this.password)
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
      zipCode: this.zipCode,
      phone: this.phone,
      isActive: this.isActive,
      isNewsLetter: this.isNewsLetter,
      token: `${this.createToken()}`,
    };
  },

  toJSON() {
    return {
      id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      name: `${this.getUserName()}`,
      email: this.email,
      role: this.role,
      shop: this.shop && !isNull(this.shop) ? this.shop.toJSON() : undefined,
      zipCode: this.zipCode,
      phone: this.phone,
      isActive: this.isActive,
      isNewsLetter: this.isNewsLetter,
    };
  },

  toJSONWithObject(hasFullUser = false) {
    return {
      id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      name: `${this.getUserName()}`,
      email: this.email,
      role: this.role,
      shop: this.shop && !isNull(this.shop) ? this.shop.toJSON() : undefined,
      zipCode: this.zipCode,
      phone: this.phone,
      isActive: this.isActive,
      isNewsLetter: this.isNewsLetter,
      stamp_items:
        hasFullUser &&
        this.stamp_items.map((item) => {
          return {
            spree: item.spree && !isNull(item.spree) ? item.spree.toJSON() : undefined,
            stamps: item.stamps,
          };
        }),
    };
  },
};
module.exports = mongoose.model('Employer', employerSchema);
