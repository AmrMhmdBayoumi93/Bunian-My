// req dotenv
require("dotenv").config();

// req mongoose
const mongoose = require("mongoose");

// Admin Model 
const Admin = require("../models/Admin");

// Create a New Func Server 
const seedSuperAdmin = async () => {
    try {
        // DB Connected
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is Connected");

        const existAdmin = await Admin.findOne({
            email: process.env.EMAILADMIN,
        });

        if (existAdmin) {
            return console.log("Already Found Admin ");
        }

        const newAdmin = {
            // NOTE: Make sure this matches 'userName' (capital N) if you used that in your Schema!
            userName: "Super Admin", 
            email: process.env.EMAILADMIN,
            password: process.env.PASSWORD_ADMIN,
        };

        // FIXED: Renamed 'admin' to 'createdAdmin' to avoid clashing with the 'Admin' model variable
        const createdAdmin = await Admin.create(newAdmin);
        console.log("Admin seeded successfully:", createdAdmin);

    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
        console.log("DB Is Closed");
        process.exit(0);
    }
};

// Run Func
seedSuperAdmin();