const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect:'mysql',
        port:+process.env.DB_PORT
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports = sequelize;