module.exports = function(sequelize, DataTypes) {
	const Event = sequelize.define('Event', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			unique: true
		},
		contactPerson: {
			type: DataTypes.STRING,
			allowNull: false
		},
		contactNumber: {
			type: DataTypes.NUMBER,
			allowNull: false
		},
		attendee: {
			type: DataTypes.NUMBER,
			allowNull: false
		}
	});

	return Event;
};
