import React from "react";
import { Link } from "react-router-dom";
export default function ClinicForms({clinicData, clinicLink}){
    return(
       
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{clinicData.patientName}</h5>
                    <p className="card-text">{clinicData.dateOfEval}</p>
                    <Link to={clinicLink}>Access Form</Link>
                  </div>
                </div>
             
    )
}