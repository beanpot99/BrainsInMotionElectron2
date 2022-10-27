import React from "react";

export default function EIForms({EIData, accessEI}){
    return(
       
             
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{EIData.childName}</h5>
                    <p className="card-text">{EIData.dateOfEval}</p>
                    <button onClick={accessEI}>Access Form</button>
                  </div>
                </div>
              
           
    )
}