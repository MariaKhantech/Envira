module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // USERNAME AND EMAIL
    userName: {
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
    // add some validation for password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // cognito userPoolId
  });

  // Associating user with events
  // When an user is deleted, also delete any associated Events
  // user can create many events
  User.associate = (models) => {
    User.hasMany(models.Event, {
      onDelete: 'cascade',
    });
  };

  User.associate = (models) => {
    User.hasMany(models.EventComment, {
      onDelete: 'cascade',
    });
  };


  // We're saying that an User should be associated with the role
  // An User can't be created without a Role due to the foreign key constraint
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  User.associate = (models) => {
    User.belongsToMany(models.Event, {
      through: 'EventAttendee',
      as: 'event',
      foreignKey: 'userId',
      otherKey: 'eventId',
    });
  };
  return User;
};
