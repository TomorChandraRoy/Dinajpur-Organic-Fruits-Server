const express = require('express');
const { userCreate, getUserAllData,googleCreateUser,getSingleUser } = require('../../controller/authController/authController');

const authRoute = express.Router();

//Manuall Email and Password
authRoute.post('/userdata',userCreate);

//GETAllUserData
authRoute.get('/getAllUserData', getUserAllData);

// GET Single User
authRoute.get('/users/:email',getSingleUser);

authRoute.post('/google/user',googleCreateUser);

module.exports=authRoute;