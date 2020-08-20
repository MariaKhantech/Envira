module.exports = (sequelize, DataTypes) => {
  // For user profile card
  const UserProfile = sequelize.define('UserProfile', {
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
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return UserProfile;
};
