import React from 'react'

function FormDashboard({draft, setDraft} ) {

  const handleDraft = (e) => {
    e.target.value.trim() !== "" ? setDraft(true) : setDraft(false);    
  }
  return (
    
    <div className="container">
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input  onChange={handleDraft}   type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>  
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>  
  )
}

export default FormDashboard


//rfce abbreviation 

