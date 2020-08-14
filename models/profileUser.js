module.exports = (sequelize, DataTypes) => {
  // For user profile card
  const ProfileUser = sequelize.define('ProfileUser', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ProfileUser;
};
