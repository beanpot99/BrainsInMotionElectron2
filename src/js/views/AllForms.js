import React from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/EIForms";
import Search from "../components/Search";
import ClinicForms from "../components/shared/ClinicForms";
import EIForms from "../components/shared/EIForms";
import { useState } from "react";
import classes from "./viewStylesheets/AllForms.module.css";
export default function AllForms(){ 
    // {filteredClinic, filteredEI}
  const[searchButton, setSearchButton] = useState("");
  const filteredClinic =[{patientName: "Grace", dateOfEval: "tuesday"},{patientName: "Grace", dateOfEval: "tuesday"},{patientName: "Grace", dateOfEval: "tuesday"}]
  const filteredEI =[{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"}]
  return(
    <div className='content-wrapper'>
        {/* <Navbar/> */}
        <div className="w-75 m-auto">
          <Search
          searchPropOne={searchButton}
          searchPropTwo={searchButton}
          searchPropThree={searchButton}
          setSearchPropOne={()=>{
            setSearchButton("EI");
        }}
          setSearchPropTwo={()=>{
            setSearchButton("Clinic");
        }}
          setSearchPropThree={()=>{
            setSearchButton("All");
         }}
         
          />
        </div>
       <div className="container-fluid">
        
       <div className="row">
           {filteredClinic.map((doc)=>{
            return(
              <div className={`col-md-4 align-items-stretch ${classes.individualCard}`}>
              <ClinicForms
                clinicData={doc}
                key={doc.patientName}
              />
              </div>
            )
           })}
        </div>
        <div className="row">
           {filteredEI.map((doc)=>{
            return(
              <div className={`col-md-4 align-items-stretch ${classes.individualCard}`}>
              <EIForms
                EIData={doc}
                key={doc.childName}
              />
              </div>
            )
           })}
        </div>
          
          </div>
    </div>
    
  )
    
}