import { DataTypes } from "sequelize";
import { sequelize } from "../database/config.database.js";

export const Products=sequelize.define('products',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    titulo:{
        type:DataTypes.STRING
    },
    contenido:{
        type:DataTypes.STRING
    },
    precio:{
        type:DataTypes.FLOAT
    }
})