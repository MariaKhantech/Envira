module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    event_name: {
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    contact_person: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isEmail: true,
      },
    },
    contact_number: {
      type: DataTypes.STRING,
      unique: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.User, { foreignKey: { allowNull: false } });
    Event.hasMany(models.EventComment, { onDelete: "cascade" });
    Event.hasMany(models.Reply, { onDelete: "cascade" });
    Event.hasMany(models.EventAttendee, { onDelete: "cascade" });
  };

  return Event;
};
