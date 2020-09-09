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
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  CompanyProfile.associate = (models) => {
    CompanyProfile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return CompanyProfile;
};
