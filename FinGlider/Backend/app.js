const express = require('express');
const mongoose = require('mongoose');
const auth = require('./router/auth.js');
const menuRoutes = require('./router/menuRoutes.js');
const cartRoutes = require('./router/cartRoutes.js');
const RestaurentInfoRoutes = require('./router/RestaurentInfoRoutes.js');
const otpRoutes = require('./router/otpRoutes.js');
const { requireAuth } = require('./middleware/authmiddleware.js');
const cookieParser = require('cookie-parser');
const twilio = require('twilio');
const cors = require('cors');
require ("dotenv").config();


const app = express();
const port =process.env.PORT;




const connect = async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  }); 

  app.use(express.json());
  app.use(cookieParser());
  
  app.use(cors());

  

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send('Welcome');
  });



app.listen(port,()=>{
    connect();
    console.log(`Server Connected to port: ${port}`);
});



app.use(auth); 
app.use("/api/otp",otpRoutes);
app.use("/api/menu",menuRoutes);
app.use("/api/Cart",cartRoutes);
app.use("/api/restaurent",RestaurentInfoRoutes);

 
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.use(requireAuth);