import db from '../db/firestore';

export const fetchForms =()=>{
    return db.collection('clinicForm')
    .get() //gets but returns a promise
    .then((snapshot)=>{
        //if you are fetching collection, data is provided under snapcshot.docs
        //docs is array
        //debugger
        const data = snapshot.docs.map(doc=>{
            return document.data();
        })
        return data;
    })
}