import * as api from '../api/clinicForms';
export function fetchEIForms(){
    return async function(dispatch){
       const eiForms = await api.fetchEIForms()
       dispatch({
        type: 'EIFORM_FETCH_SUCCESS',
        eiForms
       })
       return eiForms;
    }
}