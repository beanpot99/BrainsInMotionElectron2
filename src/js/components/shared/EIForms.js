import React from "react";

export default function EIForms({EIData}){
    return(
       
             
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{EIData.childName}</h5>
                    <p className="card-text">{EIData.dateOfEval}</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Access Form</button>
                  </div>
                </div>
              
           
    )
}