import React , { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const [mode,setmode] = useState("dark");
    const [modeval,setmodeval ] = useState("Dark");
    const [textcolor,setTextcolor] = useState("light");
    if(modeval === "Dark")
    {
        document.body.style.backgroundColor = "#224C98";
        document.body.style.color = "white";
    }
    const Handlemode = ()=>{
          if(modeval === "Dark")
          {
                setmodeval("Light");
                setmode("light");  
                setTextcolor("dark");
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
          }
          else
          {
                 setmodeval("Dark");
                 setmode("dark");
                 setTextcolor("light");
                 document.body.style.backgroundColor = "#224C98";
          }
    } 
   
    return(
    <>
             <nav className={ `navbar navbar-expand-lg navbar-light bg-${mode}` } >
                <div className="container-fluid">
                <a className={`navbar-brand text-${ textcolor }`} href="/"> Express News </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
   
               
                <div className="collapse navbar-collapse list-item" id="navbarNav">
                <ul className="navbar-nav">
                   <li className="nav-item mx-2">
                      <Link className={`nav-link active text-${ textcolor }`} aria-current="page" to="/"> Home </Link>
                   </li>
                   <li className="nav-item mx-1">
                      <Link className={ `nav-link text-${ textcolor }` } to="/business"> Business </Link>
                   </li>
                   <li className="nav-item mx-1">
                      <Link className={`nav-link text-${ textcolor }` } to="/entertainment"> Entertainment </Link>
                   </li>
                   <li className="nav-item mx-1">
                      <Link className={`nav-link text-${ textcolor }`} to="/health"> Health </Link>
                   </li>
                   <li className="nav-item mx-1">
                      <Link className={`nav-link text-${ textcolor }` } to="/science"> Science </Link>
                   </li>
                   <li className="nav-item mx-1">
                      <Link className={`nav-link text-${ textcolor }`} to="/sports"> Sports </Link>
                   </li>
                   <li className="nav-item mx-1">
                      <Link className={`nav-link text-${ textcolor }`} to="/technology"> Technology </Link>
                   </li>
                 </ul>
                  
                </div>
                <div className="mode-margin">
                  <div className="form-check form-switch " onClick={ Handlemode }>
                     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked/>
                     <label className={`form-check-label text-${ textcolor }`} htmlFor="flexSwitchCheckDefault"> { modeval } Mode </label>
                  </div>
                </div>
                  
              </div>
            </nav> 
        </>
  )
}

export default Navbar
