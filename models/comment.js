module.exports = function (sequelize, DataTypes) {
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

    //userId and companyId are foreign keys
    

    //define relationship between user and comment
    //A user can post many comments

    //define relationship between company and comment
    //A company can have many comments

    return Comment;
};
