import React from "react";
//import { ipcRenderer } from "electron";
//Renderer
//import logo from './assets/logo.png';
import Home from "./views/Home";
import ClinicForm from "./views/ClinicForm";
import EIForm from "./views/EIForm";
import MyForms from "./views/MyForms";
import AllForms from "./views/AllForms";
import Login from "./views/Login";
import Register from "./views/Register";
import IndividualForm from "./views/IndividualEIForm";
//import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
export default function App(){
   
    
    return(
        //<ClinicForm/>
       //<Home/> 
       //<EIForm/>
       //<MyForms/>
       <Router>
        <Navbar/>
        <div className='content-wrapper'>

        <Routes>
        <Route path="/EIForm"
             element={<EIForm/>}
            />
            <Route path="/ClinicForm"
             element={<ClinicForm/>}
            />
            <Route path="/IndividualForm/:id"
             element={<IndividualForm/>}
            />
            <Route path="/MyForms"
             element={<MyForms/>}
            />
            <Route path="/AllForms"
             element={<AllForms/>}
            />
            <Route path="/Login"
             element={<Login/>}
            />
            <Route path="/Register"
             element={<Register/>}
            />
            <Route path="/"
             element={<Home/>}
            />
        </Routes>
        </div>
       </Router>
      
    )
}