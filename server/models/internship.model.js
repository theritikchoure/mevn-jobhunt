const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const InternshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'First Name is Required'
    },

    description: {
        type: String,
        required: 'Last Name is Required'
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

}, {
    timestamps: true
});


module.exports = mongoose.model('Internship', InternshipSchema);
