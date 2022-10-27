import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "@material-ui/core";
export default function ClinicForms({clinicData, accessClinic}){
    return(
       
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{clinicData.patientName}</h5>
                    <p className="card-text">{clinicData.dateOfEval}</p>
                    <button onClick={accessClinic}>Access Form</button>
                  </div>
                </div>
             
    )
}