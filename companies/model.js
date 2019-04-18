const Sequelize = require('sequelize')
const sequelize = require('../db')

const Companies = sequelize.define('companies', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  foundingYear: {
    type: Sequelize.INTEGER,
    field: 'last_name',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    field: 'description'
  },
  companyId: {
    type: Sequelize.INTEGER,
    field: 'company_id'
  }
}, {
    timestamps: false,
    tableName: 'companies'
  })


module.exports = Companies