module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.Number,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    non_profit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Company;
};
