module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    contact_person: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // one user can create many events....one to many relationship
  // We're saying that an Event should belong to an User
  // An Event can't be created without an User due to the foreign key constraint
  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // An event can have many comments.....one to many relationship
  // Associating event with comments
  // When an event is deleted, also delete any associated comments
  // An event can have many comments
  Event.associate = (models) => {
    Event.hasMany(models.EventComment, {
      onDelete: 'cascade',
    });
  };
  // When an event is deleted, also delete any associated reply
  Event.associate = (models) => {
    Event.hasMany(models.Reply, {
      onDelete: 'cascade',
    });
  };
  return Event;
};
