module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define("Rating", {
    rating: {
      type: DataTypes.INTEGER,
    },
  });

  // --> User (user_id)
  Rating.associate = (models) => {
    Rating.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
        defaultValue: null,
      },
    });
    Rating.belongsTo(models.Event, {
      foreignKey: {
        allowNull: true,
        defaultValue: null,
      },
    });
  };

  return Rating;
};
