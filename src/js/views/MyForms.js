import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/EIForms";
import Search from "../components/Search";
import classes from "./viewStylesheets/MyForms.module.css";
import ClinicForms from "../components/shared/ClinicForms";
import EIForms from "../components/shared/EIForms";
import { useState } from "react";
export default function MyForms(){
    const[searchButton, setSearchButton] = useState("");
    const filteredClinic =[{patientName: "Grace", dateOfEval: "tuesday"},{patientName: "Grace", dateOfEval: "tuesday"},{patientName: "Grace", dateOfEval: "tuesday"}]
    const filteredEI =[{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"}]
  return(
    
    <div className='content-wrapper h-auto'>
        {/* <Navbar/> */}
        <div>
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
                clinicData={filteredClinic}
                key={filteredClinic.patientName}
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
                EIData={filteredEI}
                key={filteredEI.childName}
              />
              </div>
            )
           })}
        </div>
          
          </div>
    </div>
    
  )
    
}