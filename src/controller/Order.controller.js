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
    const{idUsuario,items,name,amount,price,total}=req.body

    try {

        // Verificar que los productos existan y obtener precios
        const productIds = items.map(item => item.idProducto);
        const products = await Products.findAll({
            where: { id: productIds }
        });

        const productMap = products.reduce((map, product) => {
            map[product.id] = product.price;
            return map;
        }, {});

        // Verificar que todos los productos existan en la base de datos
        const allProductsExist = items.every(item => productMap.hasOwnProperty(item.idProducto));
        if (!allProductsExist) {
            return res.status(400).json({ message: 'Algunos productos no existen' });
        }

        // Calcular el precio total
        let total = 0;
        const orderItems = items.map(item => {
            const price = productMap[item.idProducto];
            const itemTotal = price * item.amount;
            total += itemTotal;
            return {
                idProducto: item.idProducto,
                name: item.name, // Asumiendo que 'name' es parte de 'item'
                amount: item.amount,
                price: price,
                total: itemTotal
            };
        });

        // Crear el pedido
        const newOrder = await Orders.create({
            idUsuario,
            total,
        });
        
        await Promise.all(orderItems.map(async (item) => {
            await OrderItems.create({
                orderId: newOrder.id,
                productId: item.idProducto,
                quantity: item.amount,
                price: item.price,
                total: item.total
            });
        }));

        res.status(201).json({ order: newOrder, items: orderItems });

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