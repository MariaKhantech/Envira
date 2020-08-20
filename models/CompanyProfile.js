module.exports = (sequelize, DataTypes) => {
  const CompanyProfile = sequelize.define('CompanyProfile', {
    contact_person: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    company_description: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    environmental_focus: {
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
  });

  //   Company Profile will belong to --> Company (company_id)

  return CompanyProfile;
};
