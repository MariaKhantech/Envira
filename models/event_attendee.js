module.exports = (sequelize, DataTypes) => {
    const EventAttendee = sequelize.define("EventAttendee", {
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
        
      },
    });
  
    EventAttendee.associate = (models) => {
      EventAttendee.belongsTo(models.User, {
        foreignKey: {
          allowNull: true,
          defaultValue: null,
        },
      });
      EventAttendee.belongsTo(models.Event, {
        foreignKey: {
          allowNull: true,
          defaultValue: null,
        },
      });
    };
  
    return EventAttendee;
  };
  