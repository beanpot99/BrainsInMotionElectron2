const DEFAULT_STATE={
    items:[]
}

export default function clinicFormReducer(state=DEFAULT_STATE, action){
switch(action.type){
    case 'CLINICFORM_FETCH_SUCCESS':
    return {items:action.clinicForms}
    default:{
        return state;
    }
}
}