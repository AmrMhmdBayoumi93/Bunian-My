



    exports.verifyAdmin() = async (req,res,next)=>{

            try{
                const userRole=req.userInfo.role 
            if(!userRole){

               return  res.status(403).json({msg:"Access is Denied"})

            } 

            next()
            
            } catch (error){
                next(error)
            }

    }

    