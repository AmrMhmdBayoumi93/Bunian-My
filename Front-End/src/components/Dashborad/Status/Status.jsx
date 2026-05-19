
  import React from "react";

    import styles from "./Status.module.css";
    import CardStatus from "../ui/CardStatus/CardStatus.jsx"

function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">

         
        
      {/* // Alhamd LLAH  Done */} 

          <div className="col-12 col-md-3"> 
 
            <CardStatus counter= "120" title="Projects" icon ="fa-brands fa-r-project"   />

          </div>

          <div className="col-12 col-md-3"> 
 
<CardStatus counter="50" title="Users" icon ="fa-solid fa-user" />
          </div>

          <div className="col-12 col-md-3"> 
 
<CardStatus counter="30" title="Developers" icon ="fa-brands fa-dev" />
          </div>

          <div className="col-12 col-md-3"> 
<CardStatus counter="10" title="Blogs" icon ="fa-solid fa-blog" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Status;

