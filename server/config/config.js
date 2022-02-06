const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .optional(['development', 'production', 'test', 'provision'])
    .default('development'),
  SERVER_PORT: Joi.number()
    .default(3000),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017)
}).unknown()
  .required();

// const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
try {
  const value = envVarsSchema.validateAsync(process.env);
  // console.log(value);
}catch(error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: process.env.NODE_ENV,
  port: process.env.SERVER_PORT,
  mongooseDebug: process.env.MONGOOSE_DEBUG,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpireShortTime: process.env.JWT_EXPIRE_SHORT_TIME,
  jwtExpireLongTime: process.env.JWT_EXPIRE_LONG_TIME,
  frontend: process.env.MEAN_FRONTEND || 'angular',
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT
  },
  awsAccessKey:process.env.AWS_ACCESS_KEY,
  awsSecredAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  s3BucketName:process.env.S3_BUCKET_NAME,
  textLocalAPIKey:process.env.TEXT_LOCAL_API_KEY,
  textLocalSenderId:process.env.TEXT_LOCAL_SENDER_ID,
};

function getStandardResponse(status, message, data) {
  return {
    status: status,
    message: message,
    result: data
  }
}

module.exports = config;
