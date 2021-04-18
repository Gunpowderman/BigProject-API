const { sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email already exists",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    salaryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    secret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  (async () => {
    await sequelize.sync({ force: false });
  })();
  return User;
};
