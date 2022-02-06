const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config/config');
var Schema = mongoose.Schema;

const StudentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: 'Name is Required'
    },

    mobile: {
        type: String,
        required: [true, 'Mobile is Required'],
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

    resetPasswordToken: String,
    resetPasswordExpire: Date,

    mobileOtp: String,
    mobileOtpExpire: Date,

}, {
    timestamps: true
});

StudentSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hashSync(this.password, 10);
    }

    next();
})

StudentSchema.methods.matchPassword = async function (password) {
    console.log(password, this.password);
    return await bcrypt.compareSync(password, this.password); // true
}

StudentSchema.methods.generateToken = async function (user, remember_me) {
    const jwtExpire = remember_me ? config.jwtExpireLongTime : config.jwtExpireShortTime;
    return jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: jwtExpire });
}

StudentSchema.methods.getResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    console.log(resetToken);
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpires = Date.now() + 10 * 60 * 1000 ;

    return resetToken;
}

module.exports = mongoose.model('Student', StudentSchema);
