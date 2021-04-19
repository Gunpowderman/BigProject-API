module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define("Child", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allowance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    goal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });

  return Child;
};
