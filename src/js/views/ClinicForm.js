import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Select from "react-select";
import classes from "../views/viewStylesheets/ClinicForm.module.css";
//TO-DO:
//Automatically fills in the logged in user's information like name and signature
export default function ClinicForm(){
   
    const [dateOfEval, setDateOfEval] = useState("");
    const [patientName, setPatientName] = useState("");
    const [clientPhone, setClientPhone] = useState("(217)");
    const [address, setAddress] = useState("");
    const [parentName, setParentName] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [therapist, setTherapist] = useState("");
    const [DOB, setDOB] = useState("");
    const [physicianName, setPhysicianName] = useState("");
    const [payer, setPayer] = useState("");
    const [referral, setReferral] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [assessmentMethod, setAssessmentMethod] = useState("");
    const[behavioralObservations, setBehavioralObservations]=useState("");
    const[fineMotorSkills, setFineMotorSkills]=useState("");
    const[communicationStatus, setCommunicationStatus]=useState("");
    const[educationLevel, setEducationLevel]=useState("");
    const[strengthRangeMotion, setStrengthRangeMotion]=useState("");
    const[activitiesDailyLiving, setActivitiesDailyLiving]=useState("");
    const[fearParalysis, setFearParalysis] = useState("");
     const[moro, setMoro] = useState("");
    const[atnr, setAtnr] = useState("");
    const[stnr, setStnr] = useState("");
    const[tonicNeck, setTonicNeck] = useState("");
    const[spinalGalant, setSpinalGalant] = useState("");
    const[palmar, setPalmar] = useState("");
    const[visualTracking,setVisualTracking]=useState("");
    const[visualSaccades,setVisualSaccades]=useState("");
    const[convergenceDivergence,setConvergenceDivergence] = useState("");
    const[frequencyOT,setFrequencyOT] = useState("");
    const[durationOT,setDurationOT] = useState("");
    const[goalOne,setGoalOne] = useState("");
    const[goalTwo,setGoalTwo] = useState("");
    const[goalThree,setGoalThree] = useState("");
    const[goalFour,setGoalFour] = useState("");
    const [therapistName, setTherapistName] = useState("");
    const [therapistSignature, setTherapistSignature] = useState("");
    const [seekingSeeker, setSeekingSeeker] = useState(""); //is a number
    const [seekingSeekerSummaryScore, setSeekingSeekerSummaryScore] = useState("");
    const [avoidingAvoider, setAvoidingAvoider] = useState(""); //is a number
    const [avoidingAvoiderSummaryScore, setAvoidingAvoiderSummaryScore] = useState("");
    const [sensitivitySensor, setSensitivitySensor] = useState(""); //is a number
    const [sensitivitySensorSummaryScore, setSensitivitySensorSummaryScore] = useState("");
    const [registrationBystander, setRegistrationBystander] = useState(""); //is a number
    const [registrationBystanderSummaryScore, setRegistrationBystanderSummaryScore] = useState("");
    const [auditory, setAuditory] = useState(""); //is a number
    const [auditorySummaryScore, setAuditorySummaryScore] = useState("");
    const [visual, setVisual] = useState(""); //is a number
    const [visualSummaryScore, setVisualSummaryScore] = useState("");
    const [touch, setTouch] = useState(""); //is a number
    const [touchSummaryScore, setTouchSummaryScore] = useState("");
    const [movement, setMovement] = useState(""); //is a number
    const [movementSummaryScore, setMovementSummaryScore] = useState("");
    const [bodyPosition, setBodyPosition] = useState(""); //is a number
    const [bodyPositionSummaryScore, setBodyPositionSummaryScore] = useState("");
    const [oral, setOral] = useState(""); //is a number
    const [oralSummaryScore, setOralSummaryScore] = useState("");
    const [conduct, setConduct] = useState(""); //is a number
    const [conductSummaryScore, setConductSummaryScore] = useState("");
    const [socialEmotional, setSocialEmotional] = useState(""); //is a number
    const [socialEmotionalSummaryScore, setSocialEmotionalSummaryScore] = useState("");
    const [attentional, setAttentional] = useState(""); //is a number
    const [attentionalSummaryScore, setAttentionalSummaryScore] = useState("");
    const handleAssessmentMethod=()=>{
        console.log('click');
    }
    // const toggleFear=()=>{
    //     setFearParalysis(!fearParalysis);
    // }
    const handleSeekingSeeker=()=>{
       
        if(seekingSeeker>=0 && seekingSeeker<=6){
            setSeekingSeekerSummaryScore("Much Less Than Others");
        }else if(seekingSeeker>=7 && seekingSeeker<=19){
            setSeekingSeekerSummaryScore("Less Than Others");

        }else if(seekingSeeker>=20 && seekingSeeker<=47){
            setSeekingSeekerSummaryScore("Just Like the Majority of Others");

        }else if(seekingSeeker>=48 && seekingSeeker<=60){
            setSeekingSeekerSummaryScore("More Than Others");

        }else if(seekingSeeker>=61 && seekingSeeker<=95){
            setSeekingSeekerSummaryScore("Much More Than Others");

        }
    }
    const handleAvoidingAvoider=()=>{
       
        if(avoidingAvoider>=0 && avoidingAvoider<=7){
            setAvoidingAvoiderSummaryScore("Much Less Than Others");
        }else if(avoidingAvoider>=8 && avoidingAvoider<=20){
            setAvoidingAvoiderSummaryScore("Less Than Others");

        }else if(avoidingAvoider>=21 && avoidingAvoider<=46){
            setAvoidingAvoiderSummaryScore("Just Like the Majority of Others");

        }else if(avoidingAvoider>=47 && avoidingAvoider<=59){
            setAvoidingAvoiderSummaryScore("More Than Others");

        }else if(avoidingAvoider>=60 && avoidingAvoider<=100){
            setAvoidingAvoiderSummaryScore("Much More Than Others");

        }
    }
    const handleSensitivitySensor=()=>{
       
        if(sensitivitySensor>=0 && sensitivitySensor<=6){
            setSensitivitySensorSummaryScore("Much Less Than Others");
        }else if(sensitivitySensor>=7 && sensitivitySensor<=17){
            setSensitivitySensorSummaryScore("Less Than Others");

        }else if(sensitivitySensor>=18 && sensitivitySensor<=42){
            setSensitivitySensorSummaryScore("Just Like the Majority of Others");

        }else if(sensitivitySensor>=43 && sensitivitySensor<=53){
            setSensitivitySensorSummaryScore("More Than Others");

        }else if(sensitivitySensor>=54 && sensitivitySensor<=95){
            setSensitivitySensorSummaryScore("Much More Than Others");

        }
    }
    const handleRegistrationBystander=()=>{
       
        if(registrationBystander>=0 && registrationBystander<=6){
            setRegistrationBystanderSummaryScore("Much Less Than Others");
        }else if(registrationBystander>=7 && registrationBystander<=18){
            setRegistrationBystanderSummaryScore("Less Than Others");

        }else if(registrationBystander>=19 && registrationBystander<=43){
            setRegistrationBystanderSummaryScore("Just Like the Majority of Others");

        }else if(registrationBystander>=44 && registrationBystander<=55){
            setRegistrationBystanderSummaryScore("More Than Others");

        }else if(registrationBystander>=56 && registrationBystander<=110){
            setRegistrationBystanderSummaryScore("Much More Than Others");

        }
    }
    const handleAuditory=()=>{
       
        if(auditory>=0 && auditory<=2){
            setAuditorySummaryScore("Much Less Than Others");
        }else if(auditory>=3 && auditory<=9){
            setAuditorySummaryScore("Less Than Others");

        }else if(auditory>=10 && auditory<=24){
            setAuditorySummaryScore("Just Like the Majority of Others");

        }else if(auditory>=25 && auditory<=31){
            setAuditorySummaryScore("More Than Others");

        }else if(auditory>=32 && auditory<=40){
            setAuditorySummaryScore("Much More Than Others");

        }
    }
    const handleVisual=()=>{
       
        if(visual>=0 && visual<=4){
            setVisualSummaryScore("Much Less Than Others");
        }else if(visual>=5 && visual<=8){
            setVisualSummaryScore("Less Than Others");

        }else if(visual>=9 && visual<=17){
            setVisualSummaryScore("Just Like the Majority of Others");

        }else if(visual>=18 && visual<=21){
            setVisualSummaryScore("More Than Others");

        }else if(visual>=22 && visual<=30){
            setVisualSummaryScore("Much More Than Others");

        }
    }
    const handleTouch=()=>{
       
        if(touch<1){
            setTouchSummaryScore("Much Less Than Others");
        }else if(touch>=1 && touch<=7){
            setTouchSummaryScore("Less Than Others");

        }else if(touch>=8 && touch<=21){
            setTouchSummaryScore("Just Like the Majority of Others");

        }else if(touch>=22 && touch<=28){
            setTouchSummaryScore("More Than Others");

        }else if(touch>=29 && touch<=55){
            setTouchSummaryScore("Much More Than Others");

        }
    }
    const handleMovement=()=>{
       
        if(movement>=0 && movement<=1){
            setMovementSummaryScore("Much Less Than Others");
        }else if(movement>=2 && movement<=6){
            setMovementSummaryScore("Less Than Others");

        }else if(movement>=7 && movement<=18){
            setMovementSummaryScore("Just Like the Majority of Others");

        }else if(movement>=19 && movement<=24){
            setMovementSummaryScore("More Than Others");

        }else if(movement>=25 && movement<=40){
            setMovementSummaryScore("Much More Than Others");

        }
    }
    const handleBodyPosition=()=>{
       
        if(bodyPosition<1){
            setBodyPositionSummaryScore("Much Less Than Others");
        }else if(bodyPosition>=1 && bodyPosition<=4){
            setBodyPositionSummaryScore("Less Than Others");

        }else if(bodyPosition>=5 && bodyPosition<=15){
            setBodyPositionSummaryScore("Just Like the Majority of Others");

        }else if(bodyPosition>=16 && bodyPosition<=19){
            setBodyPositionSummaryScore("More Than Others");

        }else if(bodyPosition>=20 && bodyPosition<=40){
            setBodyPositionSummaryScore("Much More Than Others");

        }
    }
    const handleOral=()=>{
       
        if(oral>=0 && oral<=7){
            setOralSummaryScore("Less Than Others");

        }else if(oral>=8 && oral<=24){
            setOralSummaryScore("Just Like the Majority of Others");

        }else if(oral>=25 && oral<=32){
            setOralSummaryScore("More Than Others");

        }else if(oral>=33 && oral<=50){
            setOralSummaryScore("Much More Than Others");

        }
    }
    const handleConduct=()=>{
       
        if(conduct>=0 && conduct<=1){
            setConductSummaryScore("Much Less Than Others");
        }else if(conduct>=2 && conduct<=8){
            setConductSummaryScore("Less Than Others");

        }else if(conduct>=9 && conduct<=22){
            setConductSummaryScore("Just Like the Majority of Others");

        }else if(conduct>=23 && conduct<=29){
            setConductSummaryScore("More Than Others");

        }else if(conduct>=30 && conduct<=45){
            setConductSummaryScore("Much More Than Others");

        }
    }
    const handleSocialEmotional=()=>{
       
        if(socialEmotional>=0 && socialEmotional<=2){
            setSocialEmotionalSummaryScore("Much Less Than Others");
        }else if(socialEmotional>=3 && socialEmotional<=12){
            setSocialEmotionalSummaryScore("Less Than Others");

        }else if(socialEmotional>=13 && socialEmotional<=31){
            setSocialEmotionalSummaryScore("Just Like the Majority of Others");

        }else if(socialEmotional>=32 && socialEmotional<=41){
            setSocialEmotionalSummaryScore("More Than Others");

        }else if(socialEmotional>=42 && socialEmotional<=70){
            setSocialEmotionalSummaryScore("Much More Than Others");

        }
    }
    const handleAttentional=()=>{
       
        if(attentional<1){
            setAttentionalSummaryScore("Much Less Than Others");
        }else if(attentional>=1 && attentional<=8){
            setAttentionalSummaryScore("Less Than Others");

        }else if(attentional>=9 && attentional<=24){
            setAttentionalSummaryScore("Just Like the Majority of Others");

        }else if(attentional>=25 && attentional<=31){
            setAttentionalSummaryScore("More Than Others");

        }else if(attentional>=32 && attentional<=50){
            setAttentionalSummaryScore("Much More Than Others");

        }
    }
            let edLevelOptions = [
                {
                  value: "Less Than Elementary",
                  label: "Less Than Elementary",
                  ...({ disabled: false }),
                },
                {
                  value: "Elementary",
                  label: "Elementary",
                  ...({ disabled: false }),
                },
                {
                  value: "Middle",
                  label: "Middle",
                  ...( { disabled: false }),
                },
                {
                    value: "Some High School",
                    label: "Some High School",
                    ...({ disabled: false }),
                  },
                  {
                    value: "High School Diploma",
                    label: "High School Diploma",
                    ...({ disabled: false }),
                  },
                  {
                    value: "Some College",
                    label: "Associates",
                    ...( { disabled: false }),
                  },
                  {
                      value: "Associates",
                      label: "Associates",
                      ...( { disabled: false }),
                    },
                    {
                      value: "Bachelors",
                      label: "Bachelors",
                      ...( { disabled: false }),
                    },
                    {
                      value: "Graduate or above",
                      label: "Graduate or above",
                      ...( { disabled: false }),
                    },
              ];
  let assessOptions = [
    {
        value: "Observation",
        label: "Observation",
        ...({ disabled: false }),
      },
      {
        value: "Interview",
        label: "Interview",
        ...({ disabled: false }),
      },
      {
        value: "Standardized Test",
        label: "Standardized Test",
        ...( { disabled: false }),
      },
  ];
  let behavioralOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let strengthROMOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let commStatusOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let adlOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let fineMotorOptions = [
    {
      value: "Raking",
      label: "Raking",
      ...({ disabled: false }),
    },
    {
      value: "Pincer",
      label: "Pincer",
      ...({ disabled: false }),
    },
    {
      value: "Grasping",
      label: "Grasping",
      ...( { disabled: false }),
    },
    {
        value: "Whole hand",
        label: "Whole hand",
        ...( { disabled: false }),
      },
      {
        value: "Uses a fisted grasp",
        label: "Uses a fisted grasp",
        ...( { disabled: false }),
      },
      {
        value: "Grasps writing tool with all fingertips on tool",
        label: "Grasps writing tool with all fingertips on tool",
        ...( { disabled: false }),
      },
  ];
  let frequencyOptions = [
    {
      value: "Twice a week",
      label: "Twice a week",
      ...({ disabled: false }),
    },
    {
      value: "Once a week",
      label: "Once a week",
      ...({ disabled: false }),
    },
    {
      value: "Every other week",
      label: "Every other week",
      ...( { disabled: false }),
    },
    {
        value: "Monthly",
        label: "Monthly",
        ...( { disabled: false }),
      },
      {
        value: "As needed",
        label: "As needed",
        ...( { disabled: false }),
      }
  ];
  useEffect(()=>{
    handleSeekingSeeker();
  },[seekingSeeker]);

  useEffect(()=>{
    handleAvoidingAvoider();
  },[avoidingAvoider]);

  useEffect(()=>{
    handleSensitivitySensor();
  },[sensitivitySensor]);

  useEffect(()=>{
    handleRegistrationBystander();
  },[registrationBystander]);

  useEffect(()=>{
    handleAuditory();
  },[auditory]);

  useEffect(()=>{
    handleVisual();
  },[visual]);

  useEffect(()=>{
    handleTouch();
  },[touch]);

  useEffect(()=>{
    handleMovement();
  },[movement]);

  useEffect(()=>{
    handleBodyPosition();
  },[bodyPosition]);

  useEffect(()=>{
    handleOral();
  },[oral]);

  useEffect(()=>{
    handleConduct();
  },[conduct]);

  useEffect(()=>{
    handleSocialEmotional();
  },[socialEmotional]);

  useEffect(()=>{
    handleAttentional();
  },[attentional]);

    return(
    <>
    <form  >
       <div className='content-wrapper'>
      {/* <Navbar/> */}
      
<header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Initial Occupational Therapy Evaluation</h3>
    </header>

    <div className={classes.sideBySideTables}>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>Date of Eval:</td>
                    <td><input type="date" value={dateOfEval} onChange={(e)=>setDateOfEval(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td><input type="text" value={patientName} onChange={(e)=>setPatientName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td><input type="text"  value={address} onChange={(e)=>setAddress(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Parent/Guardian:</td>
                    <td><input type="text" value={parentName} onChange={(e)=>setParentName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Diagnosis:</td>
                    <td><input type="text" value={diagnosis} onChange={(e)=>setDiagnosis(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Therapist:</td>
                    <td>
                        <select className="form-control" value={therapist} onChange={(e)=>setTherapist(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>DOB:</td>
                    <td><input type="date"  value={DOB} onChange={(e)=>setDOB(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text"  value={clientPhone} onChange={(e)=>setClientPhone(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Physician:</td>
                    <td><input type="text" value={physicianName} onChange={(e)=>setPhysicianName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Payer:</td>
                    <td>
                        <select className="form-control" value={payer} onChange={(e)=>setPayer(e.target.value)}>
                            <option value="Insurance" name="insuranceClinic" >Insurance</option>
                            <option value="Private Pay" name="privatePayClinic" >Private Pay</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>NPI:</td>
                    <td>1114051018</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>REFERRAL INFORMATION/PARENT CONCERNS:</h5>
</div>
    <div className={classes.sideBySideTables}>
            <div className={classes.child2}>
                <textarea value={referral} className={`form-control ${classes.textArea}`} rows="3" onChange={(e)=>setReferral(e.target.value)}></textarea>
            </div><br/>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>MEDICAL AND DEVELOPMENTAL HISTORY:</h5>
</div>
    <div className={classes.sideBySideTables}>
        <div className={classes.child2}>
            <textarea value={medicalHistory} className={`form-control ${classes.textArea}`} rows="3" onChange={(e)=>setMedicalHistory(e.target.value)}></textarea>
            </div><br/>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>ASSESSMENT INFORMATION:</h5>
</div>
<div className={classes.verticalTables}>
    <div className={classes.child}>
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>Assessment Method:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      assessmentMethod
                        ? assessOptions.filter((obj) =>
                            assessmentMethod.includes(obj.value)
                          )
                        : ""
                    }
                    options={assessOptions}
                    onChange={(e)=>setAssessmentMethod(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            <tr>
                <td>Behavioral Observations:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      behavioralObservations
                        ? behavioralOptions.filter((obj) =>
                            behavioralObservations.includes(obj.value)
                          )
                        : ""
                    }
                    options={behavioralOptions}
                    onChange={(e)=>setBehavioralObservations(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            <tr>
                <td>Fine Motor Skills:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      fineMotorSkills
                        ? fineMotorOptions.filter((obj) =>
                            fineMotorSkills.includes(obj.value)
                          )
                        : ""
                    }
                    options={fineMotorOptions}
                    onChange={(e)=>setFineMotorSkills(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            <tr>
                <td>Strength/Range of Motion:</td>
                <td>
                   <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      strengthRangeMotion
                        ? strengthROMOptions.filter((obj) =>
                        strengthRangeMotion.includes(obj.value)
                          )
                        : ""
                    }
                    options={strengthROMOptions}
                    onChange={(e)=>setStrengthRangeMotion(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            <tr>
                <td>Communication Status:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      communicationStatus
                        ? commStatusOptions.filter((obj) =>
                        communicationStatus.includes(obj.value)
                          )
                        : ""
                    }
                    options={commStatusOptions}
                    onChange={(e)=>setCommunicationStatus(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            <tr>
                <td>Education Level:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      educationLevel
                        ? edLevelOptions.filter((obj) =>
                        educationLevel.includes(obj.value)
                          )
                        : ""
                    }
                    options={edLevelOptions}
                    onChange={(e)=>setEducationLevel(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            
            <tr>
                 <td>Activities of Daily Living:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      activitiesDailyLiving
                        ? adlOptions.filter((obj) =>
                        activitiesDailyLiving.includes(obj.value)
                          )
                        : ""
                    }
                    options={adlOptions}
                    onChange={(e)=>setActivitiesDailyLiving(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child}>
        <table className="table table-striped">
            <tbody>
            
            </tbody>
        </table>
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>NEUROMOTOR/PRIMITIVE REFLEXES:</h5>
</div>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table table-striped">
        <tbody>
            <tr>
                <td>
                Fear Paralysis Reflex
                </td>
                <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={fearParalysis}
                        checked={fearParalysis=="present"}
                        onChange={()=>{
                            setFearParalysis("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={fearParalysis}
                        checked={fearParalysis=="integrated"}
                        onChange={()=>{
                            setFearParalysis("integrated");
                        }}
                    />
                    Integrated
            </td> 
            
        </tr>
        
        <tr>
            <td>Moro Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={moro}
                        checked={moro=="present"}
                        onChange={()=>{
                            setMoro("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={moro}
                        checked={moro=="integrated"}
                        onChange={()=>{
                            setMoro("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Asymmetrical Tonic Neck Reflex (ATNR)</td>
            <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={atnr}
                        checked={atnr=="present"}
                        onChange={()=>{
                            setAtnr("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={atnr}
                        checked={atnr=="integrated"}
                        onChange={()=>{
                            setAtnr("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Symmetrical Tonic Neck Reflex (STNR)</td>
            <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={stnr}
                        checked={stnr=="present"}
                        onChange={()=>{
                            setStnr("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={stnr}
                        checked={stnr=="integrated"}
                        onChange={()=>{
                            setStnr("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Tonic Neck Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={tonicNeck}
                        checked={tonicNeck=="present"}
                        onChange={()=>{
                            setTonicNeck("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={tonicNeck}
                        checked={tonicNeck=="integrated"}
                        onChange={()=>{
                            setTonicNeck("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Spinal Galant Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={spinalGalant}
                        checked={spinalGalant=="present"}
                        onChange={()=>{
                            setSpinalGalant("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={spinalGalant}
                        checked={spinalGalant=="integrated"}
                        onChange={()=>{
                            setSpinalGalant("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Palmar Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={palmar}
                        checked={palmar=="present"}
                        onChange={()=>{
                            setPalmar("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        // id="switch_present" 
                        // name="switchToggle"
                        value={palmar}
                        checked={palmar=="integrated"}
                        onChange={()=>{
                            setPalmar("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        </tbody>
    </table>
</div>
</div>
{/* /////////////////////////////////////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SENSORY PROCESSING SKILLS: Child Sensory Profile 2:</h5>
</div>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table table-striped">
        <tbody>
            <tr>
                <td className="font-weight-bold">Category</td>
                <td className="font-weight-bold">Raw Score</td>
                <td></td>
                <td className="font-weight-bold">Summary Score</td>
            </tr>
            <tr>
                <td>
                Seeking/Seeker
                </td>
                <td >
                    <input
                        type="number"
                        value={seekingSeeker}
                        onChange={(e)=>setSeekingSeeker(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/95</td>
                <td>{seekingSeekerSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Avoiding/Avoider
                </td>
                <td >
                    <input
                        type="number"
                        value={avoidingAvoider}
                        onChange={(e)=>setAvoidingAvoider(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/100</td>
                <td>{avoidingAvoiderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Sensitivity/Sensory
                </td>
                <td >
                    <input
                        type="number"
                        value={sensitivitySensor}
                        onChange={(e)=>setSensitivitySensor(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/95</td>
                <td>{sensitivitySensorSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Registration/Bystander
                </td>
                <td >
                    <input
                        type="number"
                        value={registrationBystander}
                        onChange={(e)=>setRegistrationBystander(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/110</td>
                <td>{registrationBystanderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Auditory
                </td>
                <td >
                    <input
                        type="number"
                        value={auditory}
                        onChange={(e)=>setAuditory(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/40</td>
                <td>{auditorySummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Visual
                </td>
                <td >
                    <input
                        type="number"
                        value={visual}
                        onChange={(e)=>setVisual(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/30</td>
                <td>{visualSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Touch
                </td>
                <td >
                    <input
                        type="number"
                        value={touch}
                        onChange={(e)=>setTouch(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/55</td>
                <td>{touchSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Movement
                </td>
                <td >
                    <input
                        type="number"
                        value={movement}
                        onChange={(e)=>setMovement(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/40</td>
                <td>{movementSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Body Position
                </td>
                <td >
                    <input
                        type="number"
                        value={bodyPosition}
                        onChange={(e)=>setBodyPosition(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/40</td>
                <td>{bodyPositionSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Oral
                </td>
                <td >
                    <input
                        type="number"
                        value={oral}
                        onChange={(e)=>setOral(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/50</td>
                <td>{oralSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Conduct
                </td>
                <td >
                    <input
                        type="number"
                        value={conduct}
                        onChange={(e)=>setConduct(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/45</td>
                <td>{conductSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Social Emotional
                </td>
                <td >
                    <input
                        type="number"
                        value={socialEmotional}
                        onChange={(e)=>setSocialEmotional(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/70</td>
                <td>{socialEmotionalSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Attentional
                </td>
                <td >
                    <input
                        type="number"
                        value={attentional}
                        onChange={(e)=>setAttentional(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/50</td>
                <td>{attentionalSummaryScore}</td>
            
            </tr>
        
        </tbody>
    </table>
</div>
</div>
{/* /////////////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>VISUAL MOTOR/VISUAL PERCEPTION</h5>
    
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>

        <h6 id="visualTracking">Visual Tracking:</h6>
    <textarea value={visualTracking} onChange={(event)=>setVisualTracking(event.target.value)} className={`form-control ${classes.textArea}`} rows="3"></textarea>
    </div><br/>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="visualSaccades">Visual Saccades:</h6>
        <textarea value={visualSaccades} onChange={(event)=>setVisualSaccades(event.target.value)} className={`form-control ${classes.textArea}`} rows="3"></textarea>
    </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="convergenceDivergence">Convergence/Divergence:</h6>
        <textarea value={convergenceDivergence} onChange={(event)=>setConvergenceDivergence(event.target.value)} className={`form-control ${classes.textArea}`} rows="3"></textarea>
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SUMMARY/PLAN:</h5>
</div>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table">
        <tbody>
        <tr>
            <td>Frequency of OT:</td>
            <td>
                   <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      frequencyOT
                        ? frequencyOptions.filter((obj) =>
                        frequencyOT.includes(obj.value)
                          )
                        : ""
                    }
                    options={frequencyOptions}
                    onChange={handleAssessmentMethod}
                    isOptionDisabled={(option) => option.disabled}
                    required
                  />
                    <br/>
                </td>
        </tr>
        <tr>
            <td>Duration of OT:</td>
            <td>
                <select className="form-control" value={durationOT} onChange={(e)=>setDurationOT(e.target.value)} >
                    <option value="3 months">3 Months</option>
                    <option value="6 months">6 Months</option>
            </select>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>OCCUPATIONAL THERAPY GOALS:</h5>
</div>
<div className={classes.sideBySideTables2}>
    <div className={classes.child2}>
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>1.</td>
                <td>
                    <input type="text" value={goalOne} onChange={(e)=>setGoalOne(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            <tr>
                <td>2.</td>
                <td>
                <input type="text" value={goalTwo} onChange={(e)=>setGoalTwo(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            <tr>
                <td>3.</td>
                <td>
                <input type="text" value={goalThree} onChange={(e)=>setGoalThree(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            <tr>
                <td>4.</td>
                <td>
                <input type="text" value={goalFour} onChange={(e)=>setGoalFour(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.evaluatorName}>
    <select className="form-control" value={therapistName} onChange={(e)=>setTherapistName(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Printed Name</p>
    </div>
    <div className={classes.evaluatorName}>
    <select className="form-control" value={therapistSignature} onChange={(e)=>setTherapistSignature(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Signature</p>
    </div>
</div>
    <div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Submit" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Reset" className="btn btn-success"/>
    </div>
    </div>
</form>
    </>
  )
    
}