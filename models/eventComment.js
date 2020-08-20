module.exports = (sequelize, DataTypes) => {
  const EventComment = sequelize.define('EventComment', {
    commentDetail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });

  // userId,eventId and companyId are foreign keys

  // define relationship between event and comment
  // An event can have many comments
  EventComment.associate = (models) => {
    EventComment.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false,
      },
    });
  };


  // define relationship between user and comment
  // A user can post many comments
  EventComment.associate = (models) => {
    EventComment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };


  return EventComment;
};
