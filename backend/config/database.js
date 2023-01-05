import {Sequelize} from "sequelize";


const db = new Sequelize('crud-db','root','',{
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '8111',
    logging: false
});

export default db;