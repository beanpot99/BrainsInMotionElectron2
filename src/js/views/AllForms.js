import React from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/EIForms";
import Search from "../components/Search";
import ClinicForms from "../components/shared/ClinicForms";
import EIForms from "../components/shared/EIForms";
import { useState } from "react";
export default function AllForms({filteredClinic, filteredEI}){
  const[searchButton, setSearchButton] = useState("");
  
  return(
    <div className='content-wrapper'>
        {/* <Navbar/> */}
        <div className="col-8 mx-auto mt-3">
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
       <div className="row mt-3">
           {filteredClinic.map((doc)=>{
            return(
              <>
              <ClinicForms
                clinicData={filteredClinic}
                key={doc.patientName}
              />
              </>
            )
           })}
        </div>
        <div className="row mt-3">
           {filteredEI.map((doc)=>{
            return(
              <>
              <EIForms
                clinicData={filteredEI}
                key={doc.childName}
              />
              </>
            )
           })}
        </div>
          </div>
    </div>
    
  )
    
}