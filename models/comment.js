module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    commentDetail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    commentReplyDetail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });

  // userId,eventId and companyId are foreign keys
  // A user can comment on many events or many companies
  // one to many relationship


  // define relationship between user and comment
  // A user can post many comments

  // define relationship between event and comment
  // event can have many comments

  // define relationship between company and comment
  // A company can have many comments

  return Comment;
};
