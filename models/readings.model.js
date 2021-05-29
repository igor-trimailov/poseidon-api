module.exports = (sql, Sequelize) => {
  const ReadingsModel = sql.define(
    'readings',
    {
      // Model attributes are defined here
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sensor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reading: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      voltage: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  )

  return ReadingsModel
}
