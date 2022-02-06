const axios = require("axios");
const config = require('../config/config');
// const {URLSearchParams} = require('url')

const baseURL = "https://api.textlocal.in/";
const apiKey = config.textLocalAPIKey;
const sender = config.textLocalSenderId;

const smsClient = {
  sendVerificationMessage: user => {

    number = user.mobile;
    message = `Your OTP for DOCFLIQ login is ${user.mobileOtp}. The OTP is valid for only 10 min. DOCFLIQ`;

    var url = `${baseURL}/send/?apikey=${apiKey}&numbers=${user.mobile}&sender=${sender}&message=` + encodeURIComponent(message);

    axios
        .get(url)
        .then(function (response) {
        console.log(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
  }
};

module.exports = smsClient;