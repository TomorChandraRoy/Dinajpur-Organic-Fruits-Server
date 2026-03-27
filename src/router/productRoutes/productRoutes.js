const express = require('express');
const { create, getAllData, getSingleData, updateData, deleteData,  } = require('../../controller/productController/productController');
const productRoutes = express.Router();

//POST
productRoutes.post('/create',create);

//GET
productRoutes.get('/getAllData', getAllData);

//GETSingleData/:id
productRoutes.get('/getSingleData/:id', getSingleData);

//PUT/PATCH/:id
productRoutes.put('/updateData/:id', updateData);

//DELETE/:id
productRoutes.delete('/idBaseDataDelete/:id', deleteData)

module.exports=productRoutes;