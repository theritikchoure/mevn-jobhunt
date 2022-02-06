const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config/config');
var Schema = mongoose.Schema;

const EmployerSchema = new mongoose.Schema({
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
        select: false,
    },

    is_active: {
        type: Number,
        required: false,
        default: 1 // 1 for TRUE || 0 for FALSE
    },

}, {
    timestamps: true
});


EmployerSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hashSync(this.password, 10);
    }

    next();
})

EmployerSchema.methods.matchPassword = async function (password) {
    console.log(password, this.password);
    return await bcrypt.compareSync(password, this.password); // true
}

EmployerSchema.methods.generateToken = async function (user, remember_me) {
    const jwtExpire = remember_me ? config.jwtExpireLongTime : config.jwtExpireShortTime;
    return jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: jwtExpire });
}

EmployerSchema.methods.getResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    console.log(resetToken);
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpires = Date.now() + 10 * 60 * 1000 ;

    return resetToken;
}

module.exports = mongoose.model('Employer', EmployerSchema);
