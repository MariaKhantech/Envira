module.exports = (sequelize, DataTypes) => {
  const EventAttendee = sequelize.define('EventAttendee', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return EventAttendee;
};
