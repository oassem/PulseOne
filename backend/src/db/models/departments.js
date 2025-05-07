const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const departments = sequelize.define(
    'departments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  departments.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.departments.hasMany(db.appointments, {
      as: 'appointments_department',
      foreignKey: {
        name: 'departmentId',
      },
      constraints: false,
    });

    db.departments.hasMany(db.holidays, {
      as: 'holidays_department',
      foreignKey: {
        name: 'departmentId',
      },
      constraints: false,
    });

    db.departments.hasMany(db.visits, {
      as: 'visits_department',
      foreignKey: {
        name: 'departmentId',
      },
      constraints: false,
    });

    //end loop

    db.departments.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.departments.belongsTo(db.organizations, {
      as: 'organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.departments.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.departments.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return departments;
};
