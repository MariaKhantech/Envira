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

  // We're saying that an Event should belong to an User
  // An Event can't be created without an User due to the foreign key constraint
  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // We're saying that an Event should belong to a Company
  // An Event can't be created without a Company due to the foreign key constraint
  Event.associate = (models) => {
    Event.belongsTo(models.Company, {
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
