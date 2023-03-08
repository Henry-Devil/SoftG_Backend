const { Sequelize } = require('sequelize');

// Crea una instancia de Sequelize y conecta a la base de datos MySQL
const sequelize = new Sequelize('flota', 'root', 'admin123', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize; 

