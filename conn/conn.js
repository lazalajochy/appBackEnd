import { Sequelize } from "sequelize";
import 'dotenv/config'

const db = new Sequelize(process.env.database, process.env.user, process.env.password,{
    host: process.env.localhost,
    dialect: process.env.dialect
})


export default db;