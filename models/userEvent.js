module.exports = (sequelize, DataTypes) => {
	// For user profile card
	const UserEvent = sequelize.define('ProfileUser', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		eventId: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return UserEvent;
};
