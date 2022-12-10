import { db } from '../db/firestore';
export const fetchClinicForms =()=>{
    return db.collection('clinicForm')
    .get() //gets but returns a promise
    .then(snapshot =>
        snapshot.docs.map(doc=>({id:doc.id, ...doc.data()}))
        )
}