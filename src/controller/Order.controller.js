import { Orders } from "../models/Ordes.models.js"
import { User } from "../models/User.models.js";
import { Products } from "../models/Products.models.js";

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

        const user= await User.findByPk(idUsuario);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Validar que los productos existan y calcular el total
        let precioTotal = 0;
        const orderItems = [];
        for (const productItem of Products) {
            const product = await Products.findByPk(productItem.id);
            if (!product) {
                return res.status(404).json({ error: `Producto con ID ${productItem.productId} no encontrado` });
            }
            const price = product.precio;
            const quantity = productItem.amount;
            precioTotal += price * quantity;

            orderItems.push({
                productId: product.id,
                quantity,
                price,
            });
        }

        
        const newOrders=await Orders.create({
            idUsuario,
            idProducto,
            name,
            amount,
            price,
            total:precioTotal
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