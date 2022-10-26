import React from "react";
import classes from "./viewStylesheets/ClinicForm.module.css";
export default function IndividualClinicForm({clinicData}){
    return(
        <>
       <div className='content-wrapper'>
    <header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Initial Occupational Therapy Evaluation</h3>
    </header>

    <div className={classes.sideBySideTables}>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>Date of Eval:</td>
                    <td>{clinicData.dateOfEval}</td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td>{clinicData.patientName}</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>{clinicData.address}</td>
                </tr>
                <tr>
                    <td>Parent/Guardian:</td>
                    <td>{clinicData.parentName}</td>
                </tr>
                <tr>
                    <td>Diagnosis:</td>
                    <td>{clinicData.diagnosis}</td>
                </tr>
                <tr>
                    <td>Therapist:</td>
                    <td>{clinicData.therapist}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>DOB:</td>
                    <td>{clinicData.DOB}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{clinicData.clientPhone}</td>
                </tr>
                <tr>
                    <td>Physician:</td>
                    <td>{clinicData.physicianName}</td>
                </tr>
                <tr>
                    <td>Payer:</td>
                    <td>{clinicData.payer}</td>
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
            {clinicData.referral}
            </div><br/>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>MEDICAL AND DEVELOPMENTAL HISTORY:</h5>
</div>
    <div className={classes.sideBySideTables}>
        <div className={classes.child2}>
        {clinicData.medicalHistory}            
        </div>
        <br/>
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
                <td>{clinicData.assessmentMethod}</td>
            </tr>
            <tr>
                <td>Behavioral Observations:</td>
                <td>{clinicData.behavioralObservations}</td>
            </tr>
            <tr>
                <td>Fine Motor Skills:</td>
                <td>{clinicData.fineMotorSkills}</td>
            </tr>
            <tr>
                <td>Strength/Range of Motion:</td>
                <td>{clinicData.strengthRangeMotion}</td>
            </tr>
            <tr>
                <td>Communication Status:</td>
                <td>{clinicData.communicationStatus}</td>
            </tr>
            <tr>
                <td>Education Level:</td>
                <td>{clinicData.educationLevel}</td>
            </tr>
            
            <tr>
                 <td>Activities of Daily Living:</td>
                <td>{clinicData.activitiesDailyLiving}</td>
            </tr>
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
                <td >{clinicData.fearParalysis}</td> 
            
        </tr>
        
        <tr>
            <td>Moro Reflex</td>
            <td >{clinicData.moro}</td> 
        </tr>
        <tr>
            <td>Asymmetrical Tonic Neck Reflex (ATNR)</td>
            <td >{clinicData.atnr}</td> 
        </tr>
        <tr>
            <td>Symmetrical Tonic Neck Reflex (STNR)</td>
            <td >{clinicData.stnr}</td> 
        </tr>
        <tr>
            <td>Tonic Neck Reflex</td>
            <td >{clinicData.tonicNeck}</td> 
        </tr>
        <tr>
            <td>Spinal Galant Reflex</td>
            <td >{clinicData.spinalGalant}</td> 
        </tr>
        <tr>
            <td>Palmar Reflex</td>
            <td >{clinicData.palmar}</td> 
        </tr>
        </tbody>
    </table>
</div>
</div>

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
                <td>.</td>
                <td className="font-weight-bold">Summary Score</td>
            </tr>
            <tr>
                <td>
                Seeking/Seeker
                </td>
                <td >{clinicData.seekingSeeker}</td> 
                <td>/95</td>
                <td>{clinicData.seekingSeekerSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Avoiding/Avoider
                </td>
                <td >{clinicData.avoidingAvoider}</td> 
                <td>/100</td>
                <td>{clinicData.avoidingAvoiderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Sensitivity/Sensory
                </td>
                <td >{clinicData.sensitivitySensor}</td> 
                <td>/95</td>
                <td>{clinicData.sensitivitySensorSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Registration/Bystander
                </td>
                <td >{clinicData.registrationBystander}</td> 
                <td>/110</td>
                <td>{clinicData.registrationBystanderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Auditory
                </td>
                <td >{clinicData.auditory}</td> 
                <td>/40</td>
                <td>{clinicData.auditorySummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Visual
                </td>
                <td >{clinicData.visual}</td> 
                <td>/30</td>
                <td>{clinicData.visualSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Touch
                </td>
                <td >{clinicData.touch}</td> 
                <td>/55</td>
                <td>{clinicData.touchSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Movement
                </td>
                <td >{clinicData.movement}</td> 
                <td>/40</td>
                <td>{clinicData.movementSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Body Position
                </td>
                <td >{clinicData.bodyPosition}</td> 
                <td>/40</td>
                <td>{clinicData.bodyPositionSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Oral
                </td>
                <td >{clinicData.oral}</td> 
                <td>/50</td>
                <td>{clinicData.oralSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Conduct
                </td>
                <td >{clinicData.conduct}</td> 
                <td>/45</td>
                <td>{clinicData.conductSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Social Emotional
                </td>
                <td >{clinicData.socialEmotional}</td> 
                <td>/70</td>
                <td>{clinicData.socialEmotionalSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Attentional
                </td>
                <td >{clinicData.attentional}</td> 
                <td>/50</td>
                <td>{childData.attentionalSummaryScore}</td>
            
            </tr>
        
        </tbody>
    </table>
</div>
</div>

<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>VISUAL MOTOR/VISUAL PERCEPTION</h5>
    
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>

        <h6 id="visualTracking">Visual Tracking:</h6>
        {clinicData.visualTracking}    
        </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="visualSaccades">Visual Saccades:</h6>
        {clinicData.visualSaccades}    
        </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="convergenceDivergence">Convergence/Divergence:</h6>
        {clinicData.convergenceDivergence}    
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
            <td>{clinicData.frequencyOT}</td>
        </tr>
        <tr>
            <td>Duration of OT:</td>
            <td>{clinicData.durationOT}</td>
        </tr>
        </tbody>
    </table>
</div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>OCCUPATIONAL THERAPY GOALS:</h5>
</div>
<div className={classes.sideBySideTables2}>
    <div className={classes.child2}>
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>1.</td>
                <td>{clinicData.goalOne}</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>{clinicData.goalTwo}</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>{clinicData.goalThree}</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>{clinicData.goalFour}</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.evaluatorName}>{
        clinicData.therapistName}
    </div>
    <div className={classes.evaluatorName}>
        {clinicData.therapistSignature}
    </div>
</div>
    <div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Save as PDF" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Close Form" className="btn btn-success"/>
    </div>
    </div>

    </>
    )
}