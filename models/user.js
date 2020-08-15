
// const bcrypt = require('bcryptjs');


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

  // PASSPORT TEMPLATE
  // Creating a custom method for our User model. This will check if an unhashed
  // password entered by the user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = (password) => bcrypt.compareSync(password, this.password);


  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // User.addHook('beforeCreate', (user) => {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null,
  //   );
  // });

  return User;
};
