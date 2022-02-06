const config = require('../config/config');

const fs = require('fs');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


const s3 = new AWS.S3({
    accessKeyId: config.awsAccessKey,
    secretAccessKey: config.awsSecredAccessKey
});


module.exports = {
  s3Upload, s3UploadUsingMulter
}

async function s3Upload(fileName, keyName, fileType ) {
  // user = await Joi.validate(user, userSchema, { abortEarly: true });
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    const params = {
        Bucket: config.s3BucketName, // pass your bucket name
        Key: keyName, // file will be saved as testBucket/contacts.csv
        Body: JSON.stringify(data, null, 2),
        ContentType: fileType,
        ACL: 'public-read'
    };
    s3.upload(params, function(s3Err, data) {
        if (s3Err){
          console.log(s3Err);
          throw s3Err}
        console.log(`File uploaded successfully at ${data.Location}`)
        return data.Location;
    });
 });
}

async function s3UploadUsingMulter(file, keyName ) {
  console.log(file);
  var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.s3BucketName, // pass your bucket name
        key: function (req, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
  });

//   fs.readFile(fileName, (err, data) => {
//     if (err) throw err;
//     const params = {
//         Bucket: config.s3BucketName, // pass your bucket name
//         Key: keyName, // file will be saved as testBucket/contacts.csv
//         Body: JSON.stringify(data, null, 2),
//         ContentType: fileType,
//         ACL: 'public-read'
//     };
//     s3.upload(params, function(s3Err, data) {
//         if (s3Err) throw s3Err
//         console.log(`File uploaded successfully at ${data.Location}`)
//         return data.Location;
//     });
//  });
}






