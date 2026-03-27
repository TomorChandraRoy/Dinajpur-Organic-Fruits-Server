const express = require('express');
const app = express();
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const globalError = require('./src/utils/globalError/globalError');
const connectDB = require('./src/db/connectDB');
const productRoutes = require('./src/router/productRoutes/productRoutes');
const authRoute = require('./src/router/authRoute/authRoute');
const port = process.env.PORT || 7000;

//middleare
app.use(cors({
  origin:[process.env.LOCAL_CLIENT,process.env.CLIENT],
  credentials:true
}));

app.use(express.json());
// app.use(cookieParser());

// User signUpData
app.use('/api', authRoute);

//**{GET, GETonID, POST, PUT/PATCH, DELETE}**
app.use('/api', productRoutes);


app.get('/', (req, res) => {
  res.send('Server site runing...........😍🐤')
});

// handling all (get,post,update,delete.....) unhandled routes
app.all('*',(req,res,next)=>{
  const error =new Error(`Cannot find URL [${req.originalUrl}] on server. Maybe it's not the right URL`)
  error.status=404;
  next(error);

});

//setup:1 error handling middleware
app.use(globalError);

//setup:2 error handling middleware
app.use((err,req,res,next)=>{
   res.status(err.status || 500).json({
    message:err.message
   });
   next(err)
});

const main = async()=>{
  await connectDB();
  console.log("You have successfully connected to the database.....");
  app.listen(port, () => {
    console.log(`server listening on port runing.....${port}`)
  });
}
main();



