import * as api from '../api/clinicForms';
export function fetchEIForms(){
    return async function(dispatch){
       const clinicForms = await api.fetchEIForms()
    }
}