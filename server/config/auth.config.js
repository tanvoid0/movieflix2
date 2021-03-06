// import dependencies
// load libraries
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

require("dotenv").config();
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      const user_id = jwt_payload._id;
      User.findById(user_id)
        .then((user) => {
          if (user) return done(null, user);
          return done(null, false);
        })
        .catch((error) => {
          console.log(error);
          res.status(401).json({ error: error.message });
        });
    })
  );
};
