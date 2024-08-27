import { Orders } from "../models/Ordes.models.js";
import { User } from "../models/User.models.js";

export const getUser=async(req,res)=>{
    try {
        const userList=await User.findAll()
        res.json(userList)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const postUserCreate=async(req,res)=>{
    
    const {username,password,role}=req.body

    try {

        const newUser=await User.create({
            username,
            password,
            role
        })
        //res.send("Usuario creado")
        res.json(newUser)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}

export const loginUser=(req,res)=>{
    res.send("login de usuario")
}

export const getUserbyOrders=async(req,res)=>{
    const {id}=req.params

    const orderUser=await Orders.findAll({
        where:{
            idUsuario:id
        }
    });

    res.json(orderUser)

}