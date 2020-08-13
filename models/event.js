module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define('Event', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.Date,
            allowNull: false,
            unique: true,

        },
        contactPerson: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactNumber: {
            type: DataTypes.Number,
            allowNull: false,
        },
        attendee: {
            type: DataTypes.Number,
            allowNull: false,
        },
    });

    return Event;
};
