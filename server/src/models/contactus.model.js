const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },

    subject: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: Number,
      required: false,
      default: 1 // 1 is for True || 0 is for false
    },
  },
  { timestamps: true, usePushEach: true }, // UTC format
);

contactUsSchema.pre('save', function (next) {
  return next();
});

contactUsSchema.pre('findOneAndUpdate', function (next) {
  const query = this;
  const update = query.getUpdate();
  return next();
});

contactUsSchema.methods = {
  toJSON() {
    return {
      id: this._id,
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      status: this.status,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  },
};
module.exports = mongoose.model('Contactus', contactUsSchema);
