module.exports = (sequelize, DataTypes) => {
  const CompanyComment = sequelize.define('CompanyComment', {
    review_detail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });

  // define relationship between user and comment
  // A user can post many comments
  CompanyComment.associate = (models) => {
    CompanyComment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };


  return CompanyComment;
};
