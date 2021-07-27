const initialDb = require('./db/database-setup');
const express = require('express');
// const Customer= require('./db/models/customer');
// const Order = require('./db/models/order');
const router = require('./router');

initialDb();

const app = express();
app.use(express.json());

// // to get customer data
// app.get('/customer/:id', async(req,res,next)=>{
//     try{
//         const {id} = req.params;
//         const customer = await Customer.query().findById(id).withGraphFetched('order');
//         res.json(customer);
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // to get order data
// app.get('/order/:id', async(req,res,next)=>{
//     try{
//      const {id} = req.params;
//      const order = await Order.query().findById(id).withGraphFetched('customer');
//      res.json(order);
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// });
app.use(router);
app.listen(8080, () => console.log('Server is running'));