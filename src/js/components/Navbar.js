import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){
  const history = useHistory();  
  
  return(
      
        <div className="chat-navbar ">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
            
          <Link className="navbar-brand" to="/"><img src='https://www.seekpng.com/png/detail/945-9455599_parts-of-the-brain-png-easy-simple-brain.png' width="35" height="30"/></Link>
          <button
               onClick={() => history.goBack()}
              className="btn btn-primary btn-sm back-button">Back
            </button>
            <Link 
              to="/EIForm" 
              className="btn btn-secondary  ml-2">EI Form</Link>
            <Link 
              to="/ClinicForm" 
              className="btn btn-secondary ml-2">Clinic Form</Link>
            <Link
              to="/MyForms"
              className="btn btn-secondary btn-rounded ml-2">My Forms
            </Link>
            <Link
              to="/AllForms"
              className="btn btn-secondary ml-2">All Forms
            </Link>
          </div>
          
          <div className="chat-navbar-inner-right">
            <span className="logged-in-user">Hi Kristi</span>
            <Link
              to="/Register"
              className="btn btn-sm btn-secondary ml-2">Register</Link>
            <Link
              to="/Login"
              className="btn btn-sm btn-secondary ml-2">Login</Link>
          </div>
        </nav>
      </div>
    )
}