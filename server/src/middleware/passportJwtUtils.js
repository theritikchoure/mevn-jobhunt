const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.EXPRESS_SECRET;
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
      try {
        const Student = require('../models/student.model.js');
        const Employer = require('../models/employer.model.js');
        let user = await Student.findById(jwtPayload.id);
        if(!user) user = await Employer.findById(jwtPayload.id);
        
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (e) {
        return done(null, false);
      }
    }),
  );
};
