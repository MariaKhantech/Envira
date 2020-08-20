module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // USER ID
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    // Cognitio User ID(?)

    // FIRST AND LAST NAME
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

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

    // PASSWORD
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // CITY, STATE, and ZIP
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
  });

  // Associating user with events
  // When an user is deleted, also delete any associated Events
  // user can create many events
  User.associate = (models) => {
    User.hasMany(models.Event, {
      onDelete: 'cascade',
    });
  };
  return User;
};
