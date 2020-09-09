module.exports = (sequelize, DataTypes) => {
  const EventComment = sequelize.define('EventComment', {
    comment_detail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });
   
 EventComment.associate = (models) => { 
  EventComment.belongsTo(models.User, {foreignKey: {allowNull: false}});
  EventComment.belongsTo(models.Event, {foreignKey: {allowNull: false}});
  EventComment.hasMany(models.Reply, {foreignKey: {allowNull: false}});
}; 

 return EventComment;
};
