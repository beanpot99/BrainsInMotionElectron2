import * as api from '../api/clinicForms';
export function fetchClinicForms(){
    return async function(dispatch){
       const clinicForms = await api.fetchClinicForms()
    }
}