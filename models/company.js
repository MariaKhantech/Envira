
// eslint-disable-next-line func-names
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {

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

      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isEmail: true,
      },
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Company;
};
