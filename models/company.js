<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
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
      type: DataTypes.NUMBER,
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
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
=======
module.exports = function(sequelize, DataTypes) {
	const Company = sequelize.define('Company', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phoneNumber: {
			type: DataTypes.NUMBER,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		companyEmail: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
			validate: {
				isEmail: true
			}
		},
		contactPerson: {
			type: DataTypes.STRING,
			allowNull: false
		},
    non_profit: {
      type: DataTypes.STRING,
      allowNull: true,
>>>>>>> ba8725419eed44276e3316a95df9bc19ab89da3c
    },
  });

  return Company;
<<<<<<< HEAD
};
=======

>>>>>>> ba8725419eed44276e3316a95df9bc19ab89da3c
