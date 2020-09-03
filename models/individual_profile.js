module.exports = (sequelize, DataTypes) => {
  // For user profile card
  const UserProfile = sequelize.define('UserProfile', {
    // FIRST AND LAST NAME
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    // CITY, STATE, and ZIP
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: false,
      // validate: {
      //   is: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g
      // }
    },
  });

  UserProfile.associate = (models) => {
    UserProfile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return UserProfile;
};
