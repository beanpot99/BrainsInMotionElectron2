import { db } from "../db/firestore"
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldPath, DocumentSnapshot, setDoc } from "firebase/firestore";
import ClinicForms from "../components/shared/ClinicForms";

class ClinicDataService{
    getDocRef=(user)=>{
    return document(db,"users",user)
    }
    getCollectionRef=(user)=>{
        return collection(db, "users",user,"ClinicForms");
    }
    addClinicForm=(clinicForm,user)=>{
        let userRef = this.getDocRef(user);
        setDoc(userRef,{hasClinicForms:true}, {merge:true});
        return addDoc(this.getCollectionRef(user),new clinicForm);
    }
    updateClinicForm=(id,updatedClinicForm, user)=>{
        return updateDoc(doc("users",user,"ClinicForms",id),updatedClinicForm);
    }
    deleteClinic=(id,user)=>{
        return deleteDoc(doc(db,"users",user,"ClinicForms",id));
    }
    getAllClinicForms=(user)=>{
        return getDocs(this.getCollectionRef(user));

    }
    getClinicForm=(id,user)=>{
        return getDoc(doc(db,"users",user,"ClinicForms",id));
    }
}
export default new ClinicDataService();