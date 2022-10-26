import React from "react";
import Navbar from "../components/Navbar";
import classes from "../views/viewStylesheets/EIForm.module.css";
import { useState, useEffect } from "react";
export default function EIForm(){
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
    const[DOB, setDOB] = useState("");
    // const [bodyPosition, setBodyPosition] = useState(""); //is a number
    // const [bodyPositionSummaryScore, setBodyPositionSummaryScore] = useState("");
    const [oral, setOral] = useState(""); //is a number
    const [oralSummaryScore, setOralSummaryScore] = useState("");
    // const [conduct, setConduct] = useState(""); //is a number
    // const [conductSummaryScore, setConductSummaryScore] = useState("");
    // const [socialEmotional, setSocialEmotional] = useState(""); //is a number
    // const [socialEmotionalSummaryScore, setSocialEmotionalSummaryScore] = useState("");
    // const [attentional, setAttentional] = useState(""); //is a number
    // const [attentionalSummaryScore, setAttentionalSummaryScore] = useState("");
    const [behavioralSummaryScore, setBehavioralSummaryScore] = useState("");
    const[behavioral, setBehavioral] = useState("");
    const [generalSummaryScore, setGeneralSummaryScore] = useState("");
    const[general, setGeneral] = useState("");
    const[childName, setChildName] = useState("");
    const[parentName, setParentName] = useState("");
    const[therapistChoice, setTherapistChoice] = useState("");
    const[CFC, setCFC] = useState("");
    const[EINum, setEINum] = useState("");
    const[chronAge, setChronAge] = useState("");
    const[adjustedAge, setAdjustedAge] = useState("");
    const[physicianName, setPhysicianName] = useState("");
    const[languageSpoken, setLanguageSpoken] = useState("");
    const[eligibility, setEligibility] = useState("");
    const[dateOfEval, setDateOfEval] = useState("");
    const[providerDiscipline, setProviderDiscipline] = useState("");
    const[evalLocation, setEvalLocation] = useState("");
    const[providerPhone, setProviderPhone] = useState("");
    const[providerName, setProviderName] = useState("");
    const[EIAssessText, setEIAssessText] = useState("");
    const[referralInfo, setReferralInfo] = useState("");
    const[instrument, setInstrument] = useState("");
    const[physDomAge, setPhysDomAge] = useState("");
    const[physDomPerc, setPhysDomPerc] = useState("");
    const[graspAge, setGraspAge] = useState("");
    const[graspPerc, setGraspPerc] = useState("");
    const[vmAge, setVMAge] = useState("");
    const[vmPerc, setVMPerc] = useState("");
    const[fmq, setFMQ] = useState("");
    const[finalPerScore, setFinalPerScore] = useState("");
    const[devHistory, setDevHistory] = useState("");
    const[pregnancy, setPregnancy] = useState("");
    const[delivery, setDelivery] = useState("");
    const[childsHealth, setChildHealth] = useState("");
    const[ERHosp, setERHosp] = useState("");
    const[allergies, setAllergies] = useState("");
    const[diagnosis, setDiagnosis] = useState("");
    const[specialists, setSpecialists] = useState("");
    const[surgeries, setSurgeries] = useState("");
    const[medications, setMedications] = useState("");
    const[hearing, setHearing] = useState("");
    const[childVision, setChildVision] = useState("");
    const[environment, setEnvironment] = useState("");
    const[regMod, setRegMod] = useState("");
    const[eyeContactComm, setEyeContactComm] = useState("");
    const[strengthROM, setStrengthROM] = useState("");
    const[fmGrasp, setFMGrasp] = useState("");
    const[vmIntegration, setVMIntegration] = useState("");
    const[funcVision, setFuncVision] = useState("");
    const[selfHelp, setSelfHelp] = useState("");
    const[effectOfSensory, setEffectOfSensory] = useState("");
    const[justification, setJustification] = useState("");
    const[sumStrengthNeeds, setSumStrengthNeeds] = useState("");
    const[referralReccomendations, setReferralReccomendations] = useState("");
    const[evaluatorName, setEvaluatorName] = useState("");
    const[evaluatorSignature, setEvaluatorSignature] = useState("");
    const handleChange=()=>{
      console.log("change");
    }
    const handleSeekingSeeker=()=>{
       
      if(seekingSeeker===0){
          setSeekingSeekerSummaryScore("Much Less Than Others");
      }else if(seekingSeeker>=1 && seekingSeeker<=5){
          setSeekingSeekerSummaryScore("Less Than Others");

      }else if(seekingSeeker>=6 && seekingSeeker<=17){
          setSeekingSeekerSummaryScore("Just Like the Majority of Others");

      }else if(seekingSeeker>=18 && seekingSeeker<=23){
          setSeekingSeekerSummaryScore("More Than Others");

      }else if(seekingSeeker>=24 && seekingSeeker<=35){
          setSeekingSeekerSummaryScore("Much More Than Others");

      }
  }

  const handleAvoidingAvoider=()=>{
     
      if(avoidingAvoider>=0 && avoidingAvoider<=1){
          setAvoidingAvoiderSummaryScore("Much Less Than Others");
      }else if(avoidingAvoider>=2 && avoidingAvoider<=8){
          setAvoidingAvoiderSummaryScore("Less Than Others");

      }else if(avoidingAvoider>=9 && avoidingAvoider<=22){
          setAvoidingAvoiderSummaryScore("Just Like the Majority of Others");

      }else if(avoidingAvoider>=23 && avoidingAvoider<=29){
          setAvoidingAvoiderSummaryScore("More Than Others");

      }else if(avoidingAvoider>=30 && avoidingAvoider<=45){
          setAvoidingAvoiderSummaryScore("Much More Than Others");

      }
  }
  const handleSensitivitySensor=()=>{
     
      if(sensitivitySensor>=0 && sensitivitySensor<=2){
          setSensitivitySensorSummaryScore("Much Less Than Others");
      }else if(sensitivitySensor>=3 && sensitivitySensor<=9){
          setSensitivitySensorSummaryScore("Less Than Others");

      }else if(sensitivitySensor>=10 && sensitivitySensor<=24){
          setSensitivitySensorSummaryScore("Just Like the Majority of Others");

      }else if(sensitivitySensor>=25 && sensitivitySensor<=31){
          setSensitivitySensorSummaryScore("More Than Others");

      }else if(sensitivitySensor>=32 && sensitivitySensor<=50){
          setSensitivitySensorSummaryScore("Much More Than Others");

      }
  }
  const handleRegistrationBystander=()=>{
     
      if(registrationBystander>=0 && registrationBystander<=1){
          setRegistrationBystanderSummaryScore("Much Less Than Others");
      }else if(registrationBystander>=2 && registrationBystander<=5){
          setRegistrationBystanderSummaryScore("Less Than Others");

      }else if(registrationBystander>=6 && registrationBystander<=16){
          setRegistrationBystanderSummaryScore("Just Like the Majority of Others");

      }else if(registrationBystander>=17 && registrationBystander<=20){
          setRegistrationBystanderSummaryScore("More Than Others");

      }else if(registrationBystander>=21 && registrationBystander<=40){
          setRegistrationBystanderSummaryScore("Much More Than Others");

      }
  }
  const handleAuditory=()=>{
     
      if(auditory>=0 && auditory<=2){
          setAuditorySummaryScore("Much Less Than Others");
      }else if(auditory>=3 && auditory<=5){
          setAuditorySummaryScore("Less Than Others");

      }else if(auditory>=6 && auditory<=14){
          setAuditorySummaryScore("Just Like the Majority of Others");

      }else if(auditory>=15 && auditory<=17){
          setAuditorySummaryScore("More Than Others");

      }else if(auditory>=18 && auditory<=35){
          setAuditorySummaryScore("Much More Than Others");

      }
  }
  const handleVisual=()=>{
     
      if(visual>=0 && visual<=5){
          setVisualSummaryScore("Much Less Than Others");
      }else if(visual>=6 && visual<=10){
          setVisualSummaryScore("Less Than Others");

      }else if(visual>=11 && visual<=19){
          setVisualSummaryScore("Just Like the Majority of Others");

      }else if(visual>=20 && visual<=24){
          setVisualSummaryScore("More Than Others");

      }else if(visual>=25 && visual<=30){
          setVisualSummaryScore("Much More Than Others");

      }
  }
  const handleTouch=()=>{
     
      if(touch>=0 && touch<=1){
          setTouchSummaryScore("Much Less Than Others");
      }else if(touch>=2 && touch<=5){
          setTouchSummaryScore("Less Than Others");

      }else if(touch>=6 && touch<=13){
          setTouchSummaryScore("Just Like the Majority of Others");

      }else if(touch>=14 && touch<=16){
          setTouchSummaryScore("More Than Others");

      }else if(touch>=17 && touch<=30){
          setTouchSummaryScore("Much More Than Others");

      }
  }
  const handleMovement=()=>{
     
      if(movement>=0 && movement<=9){
          setMovementSummaryScore("Much Less Than Others");
      }else if(movement>=10 && movement<=12){
          setMovementSummaryScore("Less Than Others");

      }else if(movement>=13 && movement<=20){
          setMovementSummaryScore("Just Like the Majority of Others");

      }else if(movement>=21 && movement<=23){
          setMovementSummaryScore("More Than Others");

      }else if(movement>=24 && movement<=25){
          setMovementSummaryScore("Much More Than Others");

      }
  }
  
  const handleOral=()=>{
     
      if(oral>=0 && oral<=1){
          setOralSummaryScore("Less Than Others");

      }else if(oral>=2 && oral<=5){
          setOralSummaryScore("Just Like the Majority of Others");

      }else if(oral>=6 && oral<=15){
          setOralSummaryScore("More Than Others");

      }else if(oral>=16 && oral<=19){
          setOralSummaryScore("Much More Than Others");

      }else if(oral>=20 && oral<=35){
        setOralSummaryScore("Much More Than Others");

    }
  }

  const handleBehavioral=()=>{
     
    if(behavioral>=0 && behavioral<=3){
        setBehavioralSummaryScore("Less Than Others");

    }else if(behavioral>=4 && behavioral<=6){
      setBehavioralSummaryScore("Just Like the Majority of Others");

    }else if(behavioral>=7 && behavioral<=14){
      setBehavioralSummaryScore("More Than Others");

    }else if(behavioral>=15 && behavioral<=17){
      setBehavioralSummaryScore("Much More Than Others");

    }else if(behavioral>=18 && behavioral<=30){
      setBehavioralSummaryScore("Much More Than Others");

  }
}

const handleGeneral=()=>{
     
  if(general>=0 && general<=5){
      setGeneralSummaryScore("Less Than Others");

  }else if(general>=6 && general<=10){
    setGeneralSummaryScore("Just Like the Majority of Others");

  }else if(general>=11 && general<=22){
    setGeneralSummaryScore("More Than Others");

  }else if(general>=23 && general<=27){
    setGeneralSummaryScore("Much More Than Others");

  }else if(general>=28 && general<=50){
    setGeneralSummaryScore("Much More Than Others");

}
}
  // const handleConduct=()=>{
     
  //     if(conduct>=0 && conduct<=1){
  //         setConductSummaryScore("Much Less Than Others");
  //     }else if(conduct>=2 && conduct<=8){
  //         setConductSummaryScore("Less Than Others");

  //     }else if(conduct>=9 && conduct<=22){
  //         setConductSummaryScore("Just Like the Majority of Others");

  //     }else if(conduct>=23 && conduct<=29){
  //         setConductSummaryScore("More Than Others");

  //     }else if(conduct>=30 && conduct<=45){
  //         setConductSummaryScore("Much More Than Others");

  //     }
  // }
  // const handleSocialEmotional=()=>{
     
  //     if(socialEmotional>=0 && socialEmotional<=2){
  //         setSocialEmotionalSummaryScore("Much Less Than Others");
  //     }else if(socialEmotional>=3 && socialEmotional<=12){
  //         setSocialEmotionalSummaryScore("Less Than Others");

  //     }else if(socialEmotional>=13 && socialEmotional<=31){
  //         setSocialEmotionalSummaryScore("Just Like the Majority of Others");

  //     }else if(socialEmotional>=32 && socialEmotional<=41){
  //         setSocialEmotionalSummaryScore("More Than Others");

  //     }else if(socialEmotional>=42 && socialEmotional<=70){
  //         setSocialEmotionalSummaryScore("Much More Than Others");

  //     }
  // }
  // const handleAttentional=()=>{
     
  //     if(attentional<1){
  //         setAttentionalSummaryScore("Much Less Than Others");
  //     }else if(attentional>=1 && attentional<=8){
  //         setAttentionalSummaryScore("Less Than Others");

  //     }else if(attentional>=9 && attentional<=24){
  //         setAttentionalSummaryScore("Just Like the Majority of Others");

  //     }else if(attentional>=25 && attentional<=31){
  //         setAttentionalSummaryScore("More Than Others");

  //     }else if(attentional>=32 && attentional<=50){
  //         setAttentionalSummaryScore("Much More Than Others");

  //     }
  // }
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

  // useEffect(()=>{
  //   handleBodyPosition();
  // },[bodyPosition]);

  useEffect(()=>{
    handleOral();
  },[oral]);

  useEffect(()=>{
    handleBehavioral();
  },[behavioral]);

  useEffect(()=>{
    handleGeneral();
  },[general]);
  // useEffect(()=>{
  //   handleConduct();
  // },[conduct]);

  // useEffect(()=>{
  //   handleSocialEmotional();
  // },[socialEmotional]);

  // useEffect(()=>{
  //   handleAttentional();
  // },[attentional]);

    return(
<div>
<form >
       <div className='content-wrapper'>
      {/* <Navbar/> */}
<header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Illinois Early Intervention: Evaluation/Assessment Report</h3>
</header>


<div className={classes.sideBySideTables}>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 1:  Demographic Information</h5>
</div>
    <div className={classes.child}>

        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Child's Name:</td>
                <td><input className="w-100" type="text" value={childName} name="childName" onChange={(e)=>setChildName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Date of Birth:</td>
                <td><input className="w-100" type="date" value={DOB} name="dateOfBirth" onChange={(e)=>setDOB(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Parent's Name:</td>
                <td><input className="w-100" type="text" value={parentName} name="parentName" onChange={(e)=>setParentName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Service Coordinator's Name:</td>
                <td>
                    <select name="therapistChoice" onChange={(e)=>setTherapistChoice(e.target.value)} value={therapistChoice}>
                        <option value="kristi" name="kristi">Kristi Warren</option>
                        <option value="newTherapist" name="newTherapist">Other people tbd </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>CFC Number:</td>
                <td>
                    <select name="cfcNum" onChange={(e)=>setCFC(e.target.value)} value={CFC}>
                        <option  name="cfcOne">Num 1</option>
                        <option name="cfcTwo">Num 2 </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Early Intervention number:</td>
                <td><input className="w-100" type="number" value={EINum} onChange={(e)=>setEINum(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Chronological Age:</td>
                <td><input className="w-100" type="number" value={chronAge} onChange={(e)=>setChronAge(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Adjusted Age:</td>
                <td><input className="w-100" type="number" value={adjustedAge} onChange={(e)=>setAdjustedAge(e.target.value)} /> </td>
            </tr>
            <tr>
                <td>Physician Name:</td>
                <td><input className="w-100" type="text" value={physicianName} onChange={(e)=>setPhysicianName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Language Spoken:</td>
                <td>
                <input className="w-100" type="text" value={languageSpoken} onChange={(e)=>setLanguageSpoken(e.target.value)}/>
                </td>
                
            </tr>
            </tbody>
        </table>
    </div>
    


<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 2:  Type of Report</h5>
</div>
    <div className={classes.child}>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Select One (for eligibility determination):</td>
                <td>
                    <select onChange={(e)=>setEligibility(e.target.value)} value={eligibility}>
                        <option>Evaluation</option>
                        <option>Assessment</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Date of Evaluation/Assessment:</td>
                <td><input type="date" value={dateOfEval} onChange={(e)=>setDateOfEval(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Provider Name:</td>
                <td>
                    <select name="therapistChoice" onChange={(e)=>setProviderName(e.target.value)} value={providerName}>
                        <option value="kristi" name="kristi">Kristi Warren</option>
                        <option value="newTherapist" name="newTherapist">Other people tbd </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Provider Discipline:</td>
                <td>
                <select name="providerDiscipline" onChange={(e)=>setProviderDiscipline(e.target.value)} value={providerDiscipline}>
                        <option value="OT" >OT</option>
                        <option value="COTA" >COTA </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Assessment/Evaluation Location:</td>
                <td>
                <input className="w-100" type="text" onChange={(e)=>setEvalLocation(e.target.value)} value={evalLocation}/>
                </td>
            </tr>
            <tr>
                <td>Provider Phone Number:</td>
                <td>{providerPhone}</td>
            </tr>
            <tr>
                <td rowSpan="2">Assessment (if child already eligible):</td>
                <td rowSpan="2">
                    <textarea className="form-control" rows="3" onChange={(e)=>setEIAssessText(e.target.value)} value={EIAssessText}></textarea>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 3:  Referral Information</h5>
</div>

    <div className={classes.child2}>
        <h6 id="visualTracking">Please list reason for referral, who referred to Child & Family Connections, and parent/guardian concerns: </h6>
        <textarea  className="form-control" rows="3" onChange={(e)=>setReferralInfo(e.target.value)} id="referralInfo" value={referralInfo}></textarea>
    </div><br/>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 4: Instrument(s) Administered during Evaluation and/or Assessment</h5>
</div>
    <div className={classes.child2}>
        <table className="table table-striped" >
          <tbody>
            <tr>
                <td className={classes.bordRight}>
                    <p>Title of Instrument Used</p>
                    <input type="text" value={instrument} onChange={(e)=>setInstrument(e.target.value)}/>
                </td>
                <td className={classes.bordRight} >Developmental Domain Addressed</td>
                <td className={classes.bordRight} >Age Equivalent</td>
                <td >Percent of Delay</td>
            </tr>
            <tr>
                <td className={classes.bordRight} rowSpan="3">Peabody Developmental Motor Scales (PDMS 2nd)</td>
                <td className={classes.bordRight}>Physical Domain</td>
                <td className={classes.bordRight}><input type="number" value={physDomAge} onChange={(e)=>setPhysDomAge(e.target.value)}/></td>
                <td  name="physDomPercent"><input type="text" onChange={(e)=>setPhysDomPerc(e.target.value)} value={physDomPerc}></input></td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Grasping</td>
                <td className={classes.bordRight}><input type="number" value={graspAge} onChange={(e)=>setGraspAge(e.target.value)}/></td>
                <td  name="graspPercent"><input type="text" onChange={(e)=>setGraspPerc(e.target.value)} value={graspPerc}></input></td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Visual Motor Integration</td>
                <td className={classes.bordRight}><input type="number" value={vmAge} onChange={(e)=>setVMAge(e.target.value)}/></td>
                <td  name="visualMotorPercent"><input type="text" onChange={(e)=>setVMPerc(e.target.value)} value={vmPerc}></input></td>
            </tr>
            <tr>
                <td className={classes.bordRight}>Fine Motor Quotient (FMQ)</td>
                <td className={classes.bordRight}>Final Score </td>
                <td className={classes.bordRight}><input type="number" value={fmq} onChange={(e)=>setFMQ(e.target.value)}/></td>
                <td  name="finalPercentScore"><input type="text" onChange={(e)=>setFinalPerScore(e.target.value)} value={finalPerScore}></input></td>
            </tr>
            </tbody>
        </table>
    </div>
<div className={classes.textDisclaimer}>
    <p className={classes.childSensoryDisclaimer}>The PDMS-2nd Edition is a criterion-referenced assessment, which measures fine and gross motor skill development from birth through age 6.  Each test item is scored as a 0,1, or 2 with the total raw score for each section calculated by adding these points.  Raw scores are converted to standard scores and age equivalents.  Age Equivalent is the least reliable score.  The Fine Motor Quotient(FMQ) is derived by adding the standard scores from the two fine motor sections.  Scores that fall between 90-110 are considered in the average range for this test, with a standard deviation of 15.  The FMQ measures the child’s ability to stack blocks, place simple shapes in a puzzle, grasping patterns, etc.</p>
</div>
<div className={classes.summaryScores}>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table table-striped ">
        <tbody>
            <tr>
                <td className="font-weight-bold">Category</td>
                <td className="font-weight-bold">Raw Score</td>
                <td>.</td>
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
                <td>/35</td>
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
                <td>/55</td>
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
                <td>/65</td>
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
                <td>/55</td>
                <td>{registrationBystanderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                General
                </td>
                <td >
                    <input
                        type="number"
                        value={general}
                        onChange={(e)=>setGeneral(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/50</td>
                <td>{generalSummaryScore}</td>
            
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
                <td>/35</td>
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
                <td>/30</td>
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
                <td>/25</td>
                <td>{movementSummaryScore}</td>
            
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
                <td>/35</td>
                <td>{oralSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Behavioral
                </td>
                <td >
                    <input
                        type="number"
                        value={behavioral}
                        onChange={(e)=>setBehavioral(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/30</td>
                <td>{behavioralSummaryScore}</td>
            
            </tr>
        </tbody>
    </table>
</div>
</div>
</div>
<div className={classes.textDisclaimer}>
    <p className={classes.childSensoryDisclaimer}>The Sensory Profile 2 was completed by Hazelynn’s mother and scored by this therapist.  It is used to measure a child’s sensory processing abilities and to profile the effect of sensory processing on functional performance in the daily life of a child.  The Toddler portion is standardized for children 7 to 35 months.  Scores are compared to peers of the same age.  Scores that fall in the Just like the majority of others range is considered in the average range.  More than others score is 1 or more standard deviations from the mean, Much more than others is 2 or more standard deviations from the mean.</p>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}> SECTION 5: Evaluation and/or Assessment</h5>
</div>
<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
        <h6 id="visualTracking">A. Child’s developmental history and summary of parents’ concerns: </h6>
        <textarea className="form-control" rows="3" onChange={(e)=>setDevHistory(e.target.value)} id="devHistory"></textarea>
    </div>

<div className={classes.child2}>
    <h6 >B. Summary of medical history:</h6>
    <table className="table table-striped">
      <tbody>
        <tr>
            <td>Pregnancy:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setPregnancy(e.target.value)} ></textarea></td>
        </tr>          
        <tr>
            <td>Delivery:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setDelivery(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Child’s health since birth:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setChildsHealth(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>ER visits/Hospitalizations:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setERHosp(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Allergies:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setAllergies(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Diagnosis:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setDiagnosis(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Specialists:</td>
            <td><textarea className="form-control " rows="2" onChange={(e)=>setSpecialists(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Surgeries:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setSurgeries(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Medications:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setMedications(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Hearing:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setHearing(e.target.value)}></textarea></td>        </tr>
        <tr>
            <td>Vision:</td>
            <td><textarea className="form-control" rows="2" onChange={(e)=>setChildVision(e.target.value)}></textarea></td>        </tr>
        </tbody>
    </table>
</div>
    <div className={classes.child2}>
        <h6 >C. Behavioral Observations of the child:</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Environment:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setEnvironment(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>State of Regulation/Modulation:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setRegMod(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>Eye Contact/Communication:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setEyeContactComm(e.target.value)}></textarea></td>            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 >D. Child’s level of functioning in each of the developmental areas tested. (For annual reviews, also include information about the child’s progress towards IFSP outcomes):</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>STRENGTH/MUSCLE TONE/RANGE OF MOTION:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setStrengthROM(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>FINE MOTOR/GRASPING:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setFMGrasp(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>VISUAL MOTOR INTEGRATION:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setVMIntegration(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>FUNCTIONAL VISION:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setFuncVision(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>SELF-HELP SKILLS:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setSelfHelp(e.target.value)}></textarea></td>            </tr>
            <tr>
                <td>EFFECT OF SENSORY PROCESSING ON DAILY ACTIVITIES:</td>
                <td><textarea className="form-control" rows="2" onChange={(e)=>setEffectOfSensory(e.target.value)}></textarea></td>            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 id="visualTracking"> Provide justification for annual redetermination for children not meeting original eligibility criteria:</h6>
        <textarea className="form-control" rows="3" onChange={(e)=>setJustification(e.target.value)}></textarea>
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 6:  Summary and Interpretation</h5>
</div>

<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
    <h6 id="visualTracking">A. Brief summation of the child’s unique strengths and needs, ability to perform functional skills and how the child is able to participate in family routines.  Include statements about the tool's accuracy in portraying child’s development.</h6>
    <textarea className="form-control" rows="3" onChange={(e)=>setSumStrengthNeeds(e.target.value)}></textarea>
</div>
    <div className={classes.child2}>
        <h6 id="visualTracking">If applicable, recommendations for referrals for additional EI assessments and/or other resources outside of Early Intervention to be discussed at the IFSP meeting.</h6>
        <textarea className="form-control" rows="3" onChange={(e)=>setReferralReccomendations(e.target.value)}></textarea>
    </div>
    </div>
<div className={classes.sideBySideDropdowns}>
<div className={classes.evaluatorName}>
    <select className="form-control"  onChange={(e)=>setEvaluatorName(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Printed Name</p>
    </div>
    <div className={classes.evaluatorName}>
    <select className="form-control" onChange={(e)=>setEvaluatorSignature(e.target.value)} >
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Signature</p>
    </div>
</div> 
<div className={classes.sideBySideDropdowns}>
<div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Submit" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Reset" className="btn btn-success"/>
    </div>
    </div>  
    </div>
    </div>
    </div>
</form>
    </div>
  )
    
}