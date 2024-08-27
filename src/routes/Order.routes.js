import { Router } from "express";
import { getOrders,postOrder,getOrderID,patchOrder } from "../controller/Order.controller.js";

const orders=Router();

//Mostrar lista de ordenes completa
orders.get("/order",getOrders)
//crear una orden
orders.post("/crearOrder",postOrder)
//mostrar una lista de orden con una id especifica
orders.get("/order/:id",getOrderID)
// cambiar el estado de una orden
orders.patch("/order/:id",patchOrder)


export default orders;

