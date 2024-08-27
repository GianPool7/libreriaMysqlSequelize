import { DataTypes } from "sequelize";
import { sequelize } from "../database/config.database.js";
import { Products } from "./Products.models.js";

export const Orders=sequelize.define('orders',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    idUsuario:{
        type:DataTypes.INTEGER
    },
    idProducto:{
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    amount:{
        type:DataTypes.INTEGER
    },
    price:{
        type:DataTypes.FLOAT
    },
    total:{
        type:DataTypes.FLOAT
    }
})

Orders.hasMany(Products,{
    foreignKey:"id",
    sourceKey:"idProducto"
})

Products.hasMany(Orders,{
    foreignKey:"id",
    targetId:"idProducto"
})