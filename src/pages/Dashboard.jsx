  import React from "react";

  import {Routes, Route} from "react-router-dom";
  
  
  
  import Status from "./StatusPage.jsx";
  import Projects from "./Projects";
  import User from "./User";



  import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar.jsx";
import StatusPage from "./StatusPage.jsx";
function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">
        <Sidebar />
         <main className="flex-grow-1 p-4">
           <Routes>
          
             <Route path="/" element={<StatusPage/>} />
              <Route path="/users" element={<User/>} />
             <Route path="/projects" element={<Projects/>} />
        
          
           </Routes>
         </main>
         
         </div>

      <Footer />
    </>
  );
}

export default Dashboard;
