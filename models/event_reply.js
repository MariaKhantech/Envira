module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    reply_details: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });

  Reply.associate = (models) => {
    Reply.belongsTo(models.EventComment, { foreignKey: { allowNull: false } });
    Reply.belongsTo(models.Event, { foreignKey: { allowNull: false } });
    Reply.belongsTo(models.User, { foreignKey: { allowNull: false } });
  };

  return Reply;
};
