
// req express
const express =require('express')

// Router
const router =express.Router()

// req Controller
const loginController=require("../controllers/validation/authAdmin.controller");


// Init method Request 
    router.post("/login",loginController)


// export

module.exports=router;


