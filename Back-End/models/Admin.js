

const { required } = require('joi')
const mongoose =require('mongoose')
    const admniSchema = new mongoose.Schema(
        {  

         userName:{ 
            type:string, 
            required:[true,"userName is required"]
              
         }

        ,  
            email:{  type: String,
        required:[true,"email is required"]

            },
            password:{
       type: String,
        required:[true,"password is required"],
        minlength: 6,
            },



       }

, { timestamps:true})

adminSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next(); //to check if the password is modified or not 
    // if not modified it will end the function create is concidered modifing

    this.password = await bcrypt.hash(this.password,10);
})

adminSchema.methods.comparePassword= async function(matchedPassword){
    return await bcrypt.compare(matchedPassword,this.password);
}

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;




// HW  search these points


//search encapsulation ask to put it in a scenario 
//seed explain the seed for node.js project
//Hooks of mongoose


