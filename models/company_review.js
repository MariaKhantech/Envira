module.exports = (sequelize, DataTypes) => {
  const CompanyComment = sequelize.define('CompanyComment', {
    review_detail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });

  // userId,eventId and companyId are foreign keys

  // define relationship between event and comment
  // An event can have many comments
  // CompanyComment.associate = (models) => {
  //   CompanyComment.belongsTo(models.Event, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  // CompanyComment.associate = (models) => {
  //   CompanyComment.hasMany(models.CompanyReply, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };


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
