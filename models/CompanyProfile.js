module.exports = (sequelize, DataTypes) => {
  const CompanyProfile = sequelize.define('CompanyProfile', {
    contactPerson: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    companyDescription: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    environmentalFocus: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      isUrl: true,
    },
    // add validation for phone number
    phoneNumber: {
      type: DataTypes.Integer,
      allowNull: false,
      unique: false,
    },
  });

  //   Company Profile will belong to --> Company (company_id)

  return CompanyProfile;
};
