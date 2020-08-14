module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('Ratings', {
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
  // --> Company (company_id)

  return Ratings;
};
