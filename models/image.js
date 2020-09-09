module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {

        image_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        }
    });

    Image.associate = (models) => {
        Image.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Image;
};
