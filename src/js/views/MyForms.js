import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/EIForms";
import Search from "../components/Search";
import classes from "./viewStylesheets/MyForms.module.css";
import ClinicForms from "../components/shared/ClinicForms";
import EIForms from "../components/shared/EIForms";
import IndividualClinicForm from "./IndividualClinicForm";
import IndividualEIForm from "./IndividualEIForm";
import { Modal } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Dummyclinic from "./Dummyclinic";
import { fetchForms } from "../api/clinicForms";
import clinicFormActions from "../actions/clinicFormActions";
import { collection, getDocs } from "firebase/firestore";
export default function MyForms(){
    const[searchButton, setSearchButton] = useState("");
    // const filteredClinic =[{patientName: "Grace", dateOfEval: "tuesday", id:1},{patientName: "Grace", dateOfEval: "tuesday",id:2},{patientName: "Grace", dateOfEval: "tuesday", id:3}]
    // const filteredEI =[{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"},{childName: "Grace", dateOfEval: "tuesday"}]
    const [clinicId, setClinicId] = useState("");
    const[showClinic,setShowClinic] = useState(false);
    const[showEI,setShowEI] = useState(false);
    const[filteredClinic, setFilteredClinic] = useState([]);
    const history = useHistory();
    const handleShowClinic=()=>{
        history.push("/Dummyclinic");
    }
    const handleHideClinic=()=>{
        setShowClinic(false);
    }
    const handleShowEI=()=>{
        history.push("/Dummyclinic");
    }
    const handleHideEI=()=>{
        setShowClinic(false);
    }
    const getClinicIdHandler = (id) => {
      setClinicId(id);
    }
    const getForms = async () => {
      const data = await clinicFormActions.getAllClinicForms();
      setFilteredClinic(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
  };
    const deleteHandler = async(id) =>{
      await clinicFormActions.deleteClinic(id);
    }
    const confirmDelete =(id) =>{
      const confirmed = window.confirm("Are you sure you want to delete this form?")
    if(confirmed){
      deleteHandler(id);
    }
    }
    useEffect(()=>{
      getForms()
    },[]);
    return(
    
    <div className='content-wrapper '>
        {/* <Navbar/> */}
        <h6>My Forms</h6>
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
           {/* {filteredEI.map((doc)=>{
            return(
              <div className={`col-md-4 align-items-stretch ${classes.individualCard}`}>
              <EIForms
                EIData={doc}
                key={doc.childName}
                accessEI={handleShowEI}
              />
              </div>
            )
           })} */}
        </div>
        {/* <Modal 
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            open={showClinic}
            onClose={handleHideClinic}>
            <Dummyclinic/>
        </Modal>
        <Modal 
            // style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            open={showEI}
            onClose={handleHideEI}>
            <Dummyclinic/>
        </Modal> */}
          </div>
    </div>
    
  )  
    
}