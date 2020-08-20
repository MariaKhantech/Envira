module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  // Associating Role with user and company
  // When an Role is deleted, also delete any associated user
  Role.associate = (models) => {
    Role.hasMany(models.User, {
      onDelete: 'cascade',
    });
  };
  return Role;
};
