
// Admin Model

const Admin=require("../../models/Admin");


// JoiSchema

const  loginSchema=  require ("./authAdminValidation")

//JWT

const jwt= require('jsonwebtoken')

//function 

const loginController =async (req,res)=>{
    try{


        
        // Joi Validation 
        const {error,value}=loginSchema.validate(req.body,{
        
            abortEarly:false,
            stripUnknown:true,


        })
        if(error){
            return res.status (400).json({
                msg:error.details.map((err)=> err.message)

            })
        }

            //Get data from value
            const {email,password }=value;

            //check admin 
            const admin =await Admin.findOne({email}).select("+password")

            // if user not found 
            if (!admin )return res.status(400).json({
                msg:"invalid Email or Password "

            })
    
                // compare password
                const matchedPassword= await admin.comparePassword(password);
                // if Password false 
                if (!matchedPassword){
                    return res.status(400).json({
                        msg:"Invalid Email or password"
                    });

                }

        const token= jwt.sign({id:admin.id},process.env.JWT_SECRET,{expiresIn:"1d"})        
                res.status(200).json({msg:"success Login ",token})

        }

    catch (error) {}



  }



 


//export 
  module.exports=loginController;



