module.exports = (sequelize, DataTypes) => {
  const CompanyReply = sequelize.define('CompanyReply', {
    reply_detail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

  });


  // define relationship between company comment and company reply
  // An event can have many comments
  CompanyReply.associate = (models) => {
    CompanyReply.belongsTo(models.CompanyComment, {
      foreignKey: {
        allowNull: false,
      },
    });
  };


  // define relationship between user and comment
  // A user can post many comments
  CompanyReply.associate = (models) => {
    CompanyReply.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };


  return CompanyReply;
};
