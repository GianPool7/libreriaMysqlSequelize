import { Orders } from "../models/Ordes.models.js"

export const getOrders=async(req,res)=>{
    try {
        const ordersLista=await Orders.findAll()
        res.json(ordersLista)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const postOrder=async(req,res)=>{
    const{idUsuario,idProducto,name,amount,price,total}=req.body

    try {
        
        const newOrders=await Orders.create({
            idUsuario,
            idProducto,
            name,
            amount,
            price,
            total
        })
        res.send(newOrders)

    } catch (error) {
        return res.status(500).json({message:error.message})    
    }


}

export const getOrderID=async(req,res)=>{
    const {id}=req.params

    try {
        const orders=await Orders.findOne({
            where:{
                id,
            }
        })

        if (!orders) return res.status(404).json({message:"orden no encontrada"}) 

        res.json(orders)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}

export const patchOrder=(req,res)=>{
    res.send("actualizando los datos de una orden")
}