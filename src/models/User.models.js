import { DataTypes } from "sequelize";
import { sequelize } from "../database/config.database.js";
import { Orders } from "./Ordes.models.js";

export const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING
    }
})

User.hasMany(Orders,{
    foreignkey:"idUsuario",
    sourceKey:"id"
})

Orders.belongsTo(User,{
    foreignkey:'idUsuario',
    targetId:"id"
})



