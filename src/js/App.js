import React from "react";
//import { ipcRenderer } from "electron";
//Renderer
//import logo from './assets/logo.png';
import { Provider } from "react-redux";
import Home from "./views/Home";
import ClinicForm from "./views/ClinicForm";
import EIForm from "./views/EIForm";
import MyForms from "./views/MyForms";
import AllForms from "./views/AllForms";
import Login from "./views/Login";
import Register from "./views/Register";
import IndividualClinicForm from "./views/IndividualClinicForm";
import IndividualEIForm from "./views/IndividualEIForm";
import { HashRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import classes from "./App.module.css";
import Navbar from "./components/Navbar";
import Dummyclinic from "./views/Dummyclinic";
import { useState } from "react";
import store from "./store";

//import { electron } from "webpack";
export default function App(){
   
   const sendNotification=()=>{
    electron.notificationApi.sendNotification('notify', 'this is my message');
   }
    
//    const pdfSuccess=()=>{
//     electron.pdfApi.saveAsPdf('notify', 'this is my message');
//    }
    
   const saveAsAPdf=()=>{
    electron.pdfApi.saveAsPdf('print-to-pdf', 'pdf success');
    sendNotification();
   }

//    const store = configureStores();
    return(
        //<ClinicForm/>
       //<Home/> 
       //<EIForm/>
       //<MyForms/>
     
        <Router>
        
        <Navbar/>
        

        <div className={`content-wrapper ${classes.pageBackground} `}>
        <button onClick={sendNotification}>alert</button>
        <div id='pdf-path'></div>
        <Switch>
            <Route path="/EIForm">
            <EIForm/>
            </Route>
            <Route path="/ClinicForm">
            <ClinicForm/>
            </Route>
            <Route path="/IndividualClinicForm/:id">
            <IndividualClinicForm/>
            </Route>
            <Route path="/IndividualEIForm/:id">
            <IndividualEIForm/>
            </Route>
            <Route path="/MyForms">
            <MyForms/>
            </Route>
            <Route path="/AllForms">
            <AllForms/>
            </Route>
            <Route path="/Login">
            <Login/>
            </Route>
            <Route path="/Register">
            <Register/>
            </Route>
            <Route path="/Dummyclinic">
            <Dummyclinic
             savePDF={saveAsAPdf}
            />
            </Route>
            <Route path="/">
            <Home/>
            </Route>
        </Switch>
        </div>
        </Router>
       
    )
}