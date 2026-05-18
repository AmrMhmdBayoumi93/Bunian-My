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
  import { useState } from "react";

function Dashboard() {

     // useState  // to show the red dot on the users management link in the sidebar when the form is filled and the user is added successfully
  const [draft, setDraft] = useState(false);
 
 
  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">
        <Sidebar  draft={draft}/>
         <main className="flex-grow-1 p-4">

           <Routes>
          
            <Route path="/" element={<StatusPage/>} />

            <Route path="/users" element={<User/>}  >
              <Route index element={<TableDashboard  header="Users" target="Users"/>} />
              <Route path="add" element ={<FormDashboard draft={draft} setDraft={setDraft}/>} />
           




            </Route>
            
             

            <Route path="/projects" element={<Projects/>}  >
             <Route index element={<TableDashboard  header="Projects" target="Project"/>} />
              <Route path="add" element ={<FormDashboard/>} />
           
            </Route>






            
            <Route path="/developers" element={<Developers/>}  >

 
            <Route index element={<TableDashboard  header="Developers" target="Developer"/>} />
              <Route path="add" element ={<FormDashboard/>} />  

            </Route>
            
            
            
            
            
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
