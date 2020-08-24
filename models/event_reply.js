module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    reply_details: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });


  // define relationship between event and comment
  // An event can have many comments
  Reply.associate = (models) => {
    Reply.belongsTo(models.EventComment, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Reply.associate = (models) => {
    Reply.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // define relationship between user and comment
  // A user can reply to comments
  Reply.associate = (models) => {
    Reply.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };


  return Reply;
};
