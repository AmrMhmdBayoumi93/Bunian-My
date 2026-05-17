

  import {Outlet} from "react-router-dom";
  
  import FormDashboard from '../components/Dashborad/ui/FormDashboard/FormDashboard';
  import TableDashboard from '../components/Dashborad/ui/TableDashboard/TableDashboard';

function User() {
  return (
    <div>
      <section className="py-4"></section> 
       <Outlet />
        

    </div>
  );
}

export default User;

