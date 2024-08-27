import { Router } from "express";
import { getUser,postUserCreate,loginUser,getUserbyOrders } from "../controller/User.controller.js";

const user=Router();

user.get('/users',getUser)
user.get('/users/:id/orders',getUserbyOrders)
user.post('/userCreate',postUserCreate)
user.post('/login',loginUser)
// aun no se
// user.get('/user')

export default user;