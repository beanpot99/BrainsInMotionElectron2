import React from "react";
import classes from "./viewStylesheets/EIForm.module.css";
export default function IndividualEIForm({EIData}){
    return(
<div>
    <div className='content-wrapper'>
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
                <td>{EIData.childName}</td>
            </tr>
            <tr>
                <td>Date of Birth:</td>
                <td>{EIData.DOB}</td>
            </tr>
            <tr>
                <td>Parent's Name:</td>
                <td>{EIData.parentName}</td>
            </tr>
            <tr>
                <td>Service Coordinator's Name:</td>
                <td>{EIData.therapistChoice}</td>
            </tr>
            <tr>
                <td>CFC Number:</td>
                <td>{EIData.CFC}</td>
            </tr>
            <tr>
                <td>Early Intervention number:</td>
                <td>{EIData.EINum}</td>
            </tr>
            <tr>
                <td>Chronological Age:</td>
                <td>{EIData.chronAge}</td>
            </tr>
            <tr>
                <td>Adjusted Age:</td>
                <td>{EIData.adjustedAge}</td>
            </tr>
            <tr>
                <td>Physician Name:</td>
                <td>{EIData.physicianName}</td>
            </tr>
            <tr>
                <td>Language Spoken:</td>
                <td>{EIData.languageSpoken}</td>
                
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
                <td>{EIData.eligibility}</td>
            </tr>
            <tr>
                <td>Date of Evaluation/Assessment:</td>
                <td>{EIData.dateOfEval}</td>
            </tr>
            <tr>
                <td>Provider Name:</td>
                <td>{EIData.providerName}</td>
            </tr>
            <tr>
                <td>Provider Discipline:</td>
                <td>{EIData.providerDiscipline}</td>
            </tr>
            <tr>
                <td>Assessment/Evaluation Location:</td>
                <td>{EIData.evalLocation}</td>
            </tr>
            <tr>
                <td>Provider Phone Number:</td>
                <td>{EIData.providerPhone}</td>
            </tr>
            <tr>
                <td rowSpan="2">Assessment (if child already eligible):</td>
                <td rowSpan="2">{EIData.EIAssessText}</td>
            </tr>
            </tbody>
        </table>
    </div>
    

<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 3:  Referral Information</h5>
</div>

    <div className={classes.child2}>
        <h6 id="visualTracking">Please list reason for referral, who referred to Child & Family Connections, and parent/guardian concerns: </h6>
        {EIData.referralInfo}
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
                    {EIData.instrument}
                </td>
                <td className={classes.bordRight} >Developmental Domain Addressed</td>
                <td className={classes.bordRight} >Age Equivalent</td>
                <td >Percent of Delay</td>
            </tr>
            <tr>
                <td className={classes.bordRight} rowSpan="3">Peabody Developmental Motor Scales (PDMS 2nd)</td>
                <td className={classes.bordRight}>Physical Domain</td>
                <td className={classes.bordRight}>{EIData.physDomAge}</td>
                <td name="physDomPercent">{EIData.physDomPerc}</td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Grasping</td>
                <td className={classes.bordRight}>{EIData.graspAge}</td>
                <td name="graspPercent">{EIData.graspPerc}</td>
            </tr>
            <tr>
                <td className={classes.bordRight}>Visual Motor Integration</td>
                <td className={classes.bordRight}>{EIData.vmAge}</td>
                <td name="visualMotorPercent">{EIData.vmPerc}</td>
            </tr>
            <tr>
                <td className={classes.bordRight}>Fine Motor Quotient (FMQ)</td>
                <td className={classes.bordRight}>Final Score </td>
                <td className={classes.bordRight}>{EIData.fmq}</td>
                <td  name="finalPercentScore">{EIData.finalPerScore}</td>
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
                <td >{EIData.seekingSeeker}</td> 
                <td>/35</td>
                <td>{EIData.seekingSeekerSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Avoiding/Avoider
                </td>
                <td >{EIData.avoidingAvoider}</td> 
                <td>/55</td>
                <td>{EIData.avoidingAvoiderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Sensitivity/Sensory
                </td>
                <td >{EIData.sensitivitySensor}</td> 
                <td>/65</td>
                <td>{EIData.sensitivitySensorSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Registration/Bystander
                </td>
                <td >{EIData.registrationBystander}</td> 
                <td>/55</td>
                <td>{EIData.registrationBystanderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                General
                </td>
                <td >{EIData.general}</td> 
                <td>/50</td>
                <td>{EIData.generalSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Auditory
                </td>
                <td >{EIData.auditory}</td> 
                <td>/35</td>
                <td>{EIData.auditorySummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Visual
                </td>
                <td >{EIData.visual}</td> 
                <td>/30</td>
                <td>{EIData.visualSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Touch
                </td>
                <td >{EIData.touch}</td> 
                <td>/30</td>
                <td>{EIData.touchSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Movement
                </td>
                <td >{EIData.movement}</td> 
                <td>/25</td>
                <td>{EIData.movementSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Oral
                </td>
                <td >{EIData.oral}</td> 
                <td>/35</td>
                <td>{EIData.oralSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Behavioral
                </td>
                <td >{EIData.behavioral}</td> 
                <td>/30</td>
                <td>{EIData.behavioralSummaryScore}</td>
            
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
        {EIData.devHistory}
    </div>

<div className={classes.child2}>
    <h6 >B. Summary of medical history:</h6>
    <table className="table table-striped">
      <tbody>
        <tr>
            <td>Pregnancy:</td>
            <td>{EIData.pregnancy}</td>
        </tr>          
        <tr>
            <td>Delivery:</td>
            <td>{EIData.delivery}</td>        
        </tr>
        <tr>
            <td>Child’s health since birth:</td>
            <td>{EIData.childHealth}</td>        
        </tr>
        <tr>
            <td>ER visits/Hospitalizations:</td>
            <td>{EIData.ERHosp}</td>        
        </tr>
        <tr>
            <td>Allergies:</td>
            <td>{EIData.allergies}</td>        
        </tr>
        <tr>
            <td>Diagnosis:</td>
            <td>{EIData.diagnosis}</td>        
        </tr>
        <tr>
            <td>Specialists:</td>
            <td>{EIData.specialists}</td>        
        </tr>
        <tr>
            <td>Surgeries:</td>
            <td>{EIData.surgeries}</td>        
        </tr>
        <tr>
            <td>Medications:</td>
            <td>{EIData.medications}</td>        
        </tr>
        <tr>
            <td>Hearing:</td>
            <td>{EIData.hearing}</td>        
        </tr>
        <tr>
            <td>Vision:</td>
            <td>{EIData.childVision}</td>        
        </tr>
        </tbody>
    </table>
</div>
    <div className={classes.child2}>
        <h6 >C. Behavioral Observations of the child:</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Environment:</td>
                <td>{EIData.environment}</td>            
            </tr>
            <tr>
                <td>State of Regulation/Modulation:</td>
                <td>{EIData.regMod}</td>            
            </tr>
            <tr>
                <td>Eye Contact/Communication:</td>
                <td>{EIData.eyeContactComm}</td>            
            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 >D. Child’s level of functioning in each of the developmental areas tested. (For annual reviews, also include information about the child’s progress towards IFSP outcomes):</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>STRENGTH/MUSCLE TONE/RANGE OF MOTION:</td>
                <td>{EIData.strengthROM}</td>            
            </tr>
            <tr>
                <td>FINE MOTOR/GRASPING:</td>
                <td>{EIData.fmGrasp}</td>            
            </tr>
            <tr>
                <td>VISUAL MOTOR INTEGRATION:</td>
                <td>{EIData.vmIntegration}</td>            
            </tr>
            <tr>
                <td>FUNCTIONAL VISION:</td>
                <td>{EIData.funcVision}</td>            
            </tr>
            <tr>
                <td>SELF-HELP SKILLS:</td>
                <td>{EIData.selfHelp}</td>            
            </tr>
            <tr>
                <td>EFFECT OF SENSORY PROCESSING ON DAILY ACTIVITIES:</td>
                <td>{EIData.effectOfSensory}</td>            
            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 id="visualTracking"> Provide justification for annual redetermination for children not meeting original eligibility criteria:</h6>
        {EIData.justification}
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 6:  Summary and Interpretation</h5>
</div>

<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
    <h6 id="visualTracking">A. Brief summation of the child’s unique strengths and needs, ability to perform functional skills and how the child is able to participate in family routines.  Include statements about the tool's accuracy in portraying child’s development.</h6>
        {EIData.sumStrengthNeeds}
        </div>
    <div className={classes.child2}>
        <h6 id="visualTracking">If applicable, recommendations for referrals for additional EI assessments and/or other resources outside of Early Intervention to be discussed at the IFSP meeting.</h6>
            {EIData.referralReccomendations}    
            </div>
    </div>
<div className={classes.sideBySideDropdowns}>
<div className={classes.evaluatorName}>
        {EIData.evaluatorName}
        <p className="h6">Evaluator Printed Name</p>
    </div>
    <div className={classes.evaluatorName}>
            {EIData.evaluatorSignature}
        <p className="h6">Evaluator Signature</p>
    </div>
</div> 
<div className={classes.sideBySideDropdowns}>
<div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Save as PDF" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Close Form" className="btn btn-success"/>
    </div>
    </div>  
    </div>
    </div>
    </div>

    </div>
    )
}