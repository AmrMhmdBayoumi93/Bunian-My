  import React from "react";

  import {Routes, Route} from "react-router-dom";
  
  
  
  import Status from "./StatusPage.jsx";
  import Projects from "./Projects";
  import User from "./User";



  import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar.jsx";
import StatusPage from "./StatusPage.jsx";

import Developers from "./Developers.jsx";

import Cms from "./Cms.jsx";
import LifeChat from "./LifeChat.jsx";


  import FormDashboard from "../components/Dashborad/ui/FormDashboard/FormDashboard.jsx";
  import TableDashboard from "../components/Dashborad/ui/TableDashboard/TableDashboard.jsx";


function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">
        <Sidebar />
         <main className="flex-grow-1 p-4">

           <Routes>
          
            <Route path="/" element={<StatusPage/>} />
            <Route path="/users" element={<User/>}  >
              <Route index element={<TableDashboard/>} />
              <Route path="add" element ={<FormDashboard/>} />
           
            </Route>
            
             

            <Route path="/projects" element={<Projects/>} />
            
            
            <Route path="/developers" element={<Developers/>} />
            
            
            
            
            
             <Route path ="/cms" element ={<>Cms</>}/>       
             <Route path ="/live-chat" element ={<>Live Chat</>}/>  


           </Routes>
         </main>
         
         </div>

      <Footer />
    </>
  );
}

export default Dashboard;
