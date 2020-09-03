module.exports = (sequelize, DataTypes) => {
  const CompanyProfile = sequelize.define('CompanyProfile', {
    company_name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
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
    // add validation for phone number
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },

    // add validation for email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  //   Company Profile will belong to --> Company (company_id)
  CompanyProfile.associate = (models) => {
    CompanyProfile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return CompanyProfile;
};
