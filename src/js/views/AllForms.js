import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/EIForms";
import Search from "../components/Search";
import ClinicForms from "../components/shared/ClinicForms";
import EIForms from "../components/shared/EIForms";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./viewStylesheets/AllForms.module.css";
import { fetchForms } from "../api/forms";
export default function AllForms(){ 
    // {filteredClinic, filteredEI}
  const[searchButton, setSearchButton] = useState("");
  const filteredClinic =[{patientName: "Grace", dateOfEval: "tuesday"},{patientName: "Grace", dateOfEval: "tuesday"},{patientName: "Grace", dateOfEval: "tuesday"}]
  const filteredEI =[{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"}]
  const[showClinic,setShowClinic] = useState(false);
  const history= useHistory();
    const[showEI,setShowEI] = useState(false);
    const handleShowClinic=()=>{
        history.push("/Dummyclinic");
    }
    
    const handleShowEI=()=>{
        history.push("/Dummyclinic");
    }
     useEffect(()=>{
      fetchForms();
     },[])
  return(
    
    <div className='content-wrapper '>
        {/* <Navbar/> */}
        <h6>All Forms</h6>
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
           {filteredClinic.map((doc, index)=>{
            return(
              <div className={`col-md-4 align-items-stretch ${classes.individualCard}`}>
              <ClinicForms
                clinicData={doc}
                key={index}
                accessClinic={handleShowClinic}
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
                accessEI={handleShowEI}
              />
              </div>
            )
           })}
        </div>
          </div>
    </div>
    
  )
    
}