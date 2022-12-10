const DEFAULT_STATE={
    items:[]
}

export default function eiFormReducer(state=DEFAULT_STATE, action){
switch(action.type){
    case 'EIFORM_FETCH_SUCCESS':
    return {items:action.eiForms}
    default:{
        return state;
    }
}
}