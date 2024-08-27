import express from "express";
import userRoutes from "./routes/User.routes.js";
import orderRoutes from "./routes/Order.routes.js";
import productsRoutes from "./routes/Products.routes.js";



const app=express();

//midelwares
app.use(express.json());


app.use(userRoutes);
app.use(orderRoutes);
app.use(productsRoutes)

export default app;