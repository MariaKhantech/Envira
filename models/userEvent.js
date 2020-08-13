module.exports = (sequelize, DataTyles) => {
	// For user profile card
	const UserEvent = sequelize.define('ProfileUser', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		eventId: {
			type: DataTyles.STRING,
			allowNull: false
		}
	});

	return UserEvent;
};
