import { Router } from "express";
import { getProducts,getProductOne,postProducts,deleteProducts,editarProducts } from "../controller/Products.controller.js";

const products=Router();

products.get('/products',getProducts)
products.get('/product/:id',getProductOne)
products.post('/crearProducts',postProducts)
products.put('/actualizarProducts/:id',editarProducts)
products.delete('/eliminarProducts/:id',deleteProducts)

export default products;

