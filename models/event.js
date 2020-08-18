module.exports = (sequelize, DataTypes) => {
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
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attendee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    // We're saying that a Event should belong to an User
    // A Event can't be created without an User due to the foreign key constraint
    Event.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  // userID, companyId and commentID are foreign keys

  // one user can create many events....one to many relationship
  // one company can create many events.....one to many relationship
  // An event can have many comments.....one to many relationship

  return Event;
};
