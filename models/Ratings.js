module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },
  });

  // Ratings will belong to

  // --> User (user_id)
  Rating.associate = (models) => {
    Rating.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Rating;
};
