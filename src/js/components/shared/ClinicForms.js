import React from "react";

export default function ClinicForms({clinicData}){
    return(
       
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{clinicData.patientName}</h5>
                    <p className="card-text">{clinicData.dateOfEval}</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Access Form</button>
                  </div>
                </div>
             
    )
}