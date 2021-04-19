module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Transaction;
};
