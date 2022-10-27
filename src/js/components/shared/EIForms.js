import React from "react";

export default function EIForms({EIData}){
    return(
        <div className="row mt-3">
            { false &&
              <div className="container-fluid">
                <div className="alert alert-warning">No Forms :(</div>
              </div> }
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{EIData.childName}</h5>
                    <p className="card-text">{EIData.dateOfEval}</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Access Form</button>
                  </div>
                </div>
              </div>
            </div>
    )
}