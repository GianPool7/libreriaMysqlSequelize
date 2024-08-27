import { Sequelize } from "sequelize";

export const sequelize=new Sequelize('libreria','root','admin',{
    host:"localhost",
    dialect:'mysql'
})






