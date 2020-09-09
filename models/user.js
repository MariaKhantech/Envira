module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
   
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Event, { onDelete: 'cascade' });
    User.hasMany(models.EventComment, { onDelete: 'cascade' });
    User.hasOne(models.UserProfile, { onDelete: 'cascade' });
    User.hasOne(models.Image, { onDelete: 'cascade' });
    User.hasOne(models.CompanyProfile, { onDelete: 'cascade' });
    User.hasMany(models.Rating, { onDelete: 'cascade' });
    User.belongsToMany(models.Event, {
      through: 'EventAttendee',
      as: 'events',
      foreignKey: 'userId',
      otherKey: 'eventId',
    });
  };

  return User;
};
