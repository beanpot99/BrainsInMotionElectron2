import React from "react";
import classes from "./viewStylesheets/DummyClinic.module.css";
import { useHistory } from "react-router-dom";
//import { BrowserWindow } from "electron";
 //import path from "path";
export default function Dummyclinic({savePDF}){
    const history=useHistory();
    const handleCloseForm=()=>{
        history.goBack();
    }
    return(
        <div id="pdf">
       <div className='content-wrapper '>
    <header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Initial Occupational Therapy Evaluation</h3>
    </header>

    <div className={classes.sideBySideTables}>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>Date of Eval:</td>
                    <td>10/27/2022</td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td>Grace</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>516 Witherspoon</td>
                </tr>
                <tr>
                    <td>Parent/Guardian:</td>
                    <td>Sara T</td>
                </tr>
                <tr>
                    <td>Diagnosis:</td>
                    <td>Hungry</td>
                </tr>
                <tr>
                    <td>Therapist:</td>
                    <td>Kristi</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>DOB:</td>
                    <td>02/12/1999</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>2334234234234</td>
                </tr>
                <tr>
                    <td>Physician:</td>
                    <td>42342342</td>
                </tr>
                <tr>
                    <td>Payer:</td>
                    <td>gdgfdgfd</td>
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
            regffgdgfddgsfgdfgdfgdgfdfdg
            </div><br/>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>MEDICAL AND DEVELOPMENTAL HISTORY:</h5>
</div>
    <div className={classes.sideBySideTables}>
        <div className={classes.child2}>
        dfgfgfgfgfgfgfgfgfgfg           
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
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>Behavioral Observations:</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>Fine Motor Skills:</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>Strength/Range of Motion:</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>Communication Status:</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>Education Level:</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            
            <tr>
                 <td>Activities of Daily Living:</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
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
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
            
        </tr>
        
        <tr>
            <td>Moro Reflex</td>
            <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
        </tr>
        <tr>
            <td>Asymmetrical Tonic Neck Reflex (ATNR)</td>
            <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
        </tr>
        <tr>
            <td>Symmetrical Tonic Neck Reflex (STNR)</td>
            <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
        </tr>
        <tr>
            <td>Tonic Neck Reflex</td>
            <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
        </tr>
        <tr>
            <td>Spinal Galant Reflex</td>
            <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
        </tr>
        <tr>
            <td>Palmar Reflex</td>
            <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
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
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/95</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Avoiding/Avoider
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/100</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Sensitivity/Sensory
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/95</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Registration/Bystander
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/110</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Auditory
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/40</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Visual
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/30</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Touch
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/55</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Movement
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/40</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Body Position
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/40</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Oral
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/50</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Conduct
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/45</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Social Emotional
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/70</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
            </tr>
            <tr>
                <td>
                Attentional
                </td>
                <td >regffgdgfddgsfgdfgdfgdgfdfdg</td> 
                <td>/50</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            
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
        regffgdgfddgsfgdfgdfgdgfdfdg   
        </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="visualSaccades">Visual Saccades:</h6>
        regffgdgfddgsfgdfgdfgdgfdfdg    
        </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="convergenceDivergence">Convergence/Divergence:</h6>
        regffgdgfddgsfgdfgdfgdgfdfdg    
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
            <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
        </tr>
        <tr>
            <td>Duration of OT:</td>
            <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
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
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>regffgdgfddgsfgdfgdfgdgfdfdg</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.evaluatorName}>regffgdgfddgsfgdfgdfgdgfdfdg
    </div>
    <div className={classes.evaluatorName}>
    regffgdgfddgsfgdfgdfgdgfdfdg
    </div>
</div>
    <div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Save as PDF" className="btn btn-success" onClick={savePDF}/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" id="print-pdf" value="Close Form" className="btn btn-success" onClick={handleCloseForm} />
    </div>
    </div>

    </div>
    )
}