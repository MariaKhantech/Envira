module.exports = (sequelize, DataTyles) => {
	// For user profile card
	const ProfileUser = sequelize.define('ProfileUser', {
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		about: {
			type: DataTyles.STRING,
			allowNull: false
		}
	});

	return ProfileUser;
};
