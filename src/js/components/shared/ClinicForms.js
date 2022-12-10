import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "@material-ui/core";
import {AiFillEye} from "react-icons/ai";
import { BsFillPencilFill,  BsFillTrashFill } from "react-icons/bs";
import "./clinicForms.css";
export default function ClinicForms({clinicData, accessClinic}){
  const deleteForm = async() =>{
    await clinicFormActions.deleteClinic(clinicData.id);
  }
  const confirmDelete =() =>{
    const confirmed = window.confirm("Are you sure you want to delete this form?")
  if(confirmed){
    deleteHandler();
  }
  }
    return(
       
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{clinicData.patientName}</h5>
                    <p className="card-text">{clinicData.dateOfEval}</p>
                    <div class="buttons">
                    <div class="button-view">
                    <button className="btn btn-light" onClick = {accessClinic}><AiFillEye></AiFillEye></button>
                    </div>
                    <div class="button-edit">
                      <button className="btn btn-light" onClick={()=>{console.log("EDIt")}}><BsFillPencilFill></BsFillPencilFill></button>
                    </div>
                    <div class="button-trash">
                    <button className="btn btn-light" onClick = {confirmDelete}><BsFillTrashFill></BsFillTrashFill></button>
                    </div>
                  </div>
                  </div>
                </div>
             
    )
}