
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
  });

  // Associating company with events
  // When a company is deleted, also delete any associated Events
  // company can create many events
  Company.associate = (models) => {
    Company.hasMany(models.Event, {
      onDelete: 'cascade',
    });
  };

  return Company;
};
