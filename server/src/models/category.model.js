const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    internships: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internships"
    },

    status: {
      type: Number,
      required: false,
      default: 1 // 1 is for True || 0 is for false
    },
  },
  { timestamps: true, usePushEach: true }, // UTC format
);

categorySchema.pre('save', function (next) {
  return next();
});

categorySchema.pre('findOneAndUpdate', function (next) {
  const query = this;
  const update = query.getUpdate();
  return next();
});

categorySchema.methods = {
  toJSON() {
    return {
      id: this._id,
      title: this.title,
      description: this.description,
      url: this.url,
      internships: this.internships,
      status: this.status,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  },
};
module.exports = mongoose.model('Category', categorySchema);
