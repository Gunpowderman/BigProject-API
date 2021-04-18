const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../db/models");

exports.localStrategy = new LocalStrategy(async (name, password, done) => {
  try {
    console.log("I'm in pass");
    const user = await User.findOne({
      where: { name }, // equivalent to { name : name }
    });

    const passwordsMatch = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (passwordsMatch) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log("I'm in pass");

    done(error);
  }
});
