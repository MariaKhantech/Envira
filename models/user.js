module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // USERNAME AND EMAIL
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    // add validation for email
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

  // Associating user with events
  // When an user is deleted, also delete any associated Events
  // user can create many events
  User.associate = (models) => {
    User.hasMany(models.Event, { onDelete: 'cascade' });
    User.hasMany(models.EventComment, { onDelete: 'cascade' });
    User.hasOne(models.UserProfile, { onDelete: 'cascade' });
    User.hasOne(models.CompanyProfile, { onDelete: 'cascade' });
    User.hasMany(models.Rating, { onDelete: 'cascade' });
    User.belongsToMany(models.Event, {
      through: 'EventAttendee',
      as: 'events',
      foreignKey: 'userId',
      otherKey: 'eventId',
    });
  };

  // When an user is deleted, also delete any associated Event comments
  // user can comment on events
  // User.associate = (models) => {
  //   User.hasMany(models.EventComment, {
  //     onDelete: 'cascade',
  //   });
  // };

  // When an user is deleted, also delete any associated user's profile
  // User.associate = (models) => {
  //   User.hasOne(models.UserProfile, {
  //     onDelete: 'cascade',
  //   });
  // };
  // User.associate = (models) => {
  //   User.hasOne(models.CompanyProfile, {
  //     onDelete: 'cascade',
  //   });
  // };
  // User.associate = (models) => {
  //   User.hasMany(models.Rating, {
  //     onDelete: 'cascade',
  //   });
  // };
  // User.associate = (models) => {
  //   User.hasMany(models.EventAttendee, {
  //     onDelete: 'cascade',
  //   });
  // };

  // We're saying that an User should be associated with the role
  // An User can't be created without a Role due to the foreign key constraint
  // User.associate = (models) => {
  //   User.belongsTo(models.Role, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  // User.associate = (models) => {
  //   User.belongsToMany(models.Event, {
  //     through: 'EventAttendee',
  //     as: 'events',
  //     foreignKey: 'userId',
  //     otherKey: 'eventId',
  //   });
  // };

  return User;
};
