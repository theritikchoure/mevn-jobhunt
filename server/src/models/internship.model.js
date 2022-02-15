const mongoose = require('mongoose');

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
    
    url: {
      type: String,
      required: true,
      unique: true,
    },

    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employers"
    },
 
    applicants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students"
    }],

    is_paid: {
      type: Number,
      required: true,
      default: 1 // 1 is for true || 0 is for false
    },

    salary: { 
      type: String, 
      enum : ['10k - 20k', '20k - 30k', '30k - 40k', '40k - 50k'],
    }, 
    
    qualification: { 
      type: String, 
      enum : ['Undergraduate', 'Graduate'],
    }, 

    no_of_openings: {
      type: Number,
      required: true
    },

    duration: {
      type: String,
      required: false
    },

    last_date: {
      type: String,
      required: true,
    },

    skills: {
      type: Array,
      default : []
    },

    status: {
      type: Number,
      required: false,
      default: 1 // 1 is for True || 0 is for false
    },
  },
  { timestamps: true, usePushEach: true }, // UTC format
);

internshipSchema.pre('save', function (next) {
  return next();
});

internshipSchema.pre('findOneAndUpdate', function (next) {
  const query = this;
  const update = query.getUpdate();
  return next();
});

internshipSchema.methods = {
  toJSON() {
    return {
      id: this._id,
      title: this.title,
      description: this.description,
      category: this.category,
      url: this.url,
      employer: this.employer,
      applicants: this.applicants,
      is_paid: this.is_paid,
      salary: this.salary,
      no_of_openings: this.no_of_openings,
      duration: this.duration,
      last_date: this.last_date,
      status: this.status,
      qualification: this.qualification,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  },
};
module.exports = mongoose.model('Internships', internshipSchema);
