import {GET_TARGET , ADD_LOCALE} from "../Actions/actionType";
import {updateObject} from "../utility";


const initialState = {
    Target :  {Target : {
        en : {},
        ar : {}
    }},
    locale : null
}


const TargetReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_TARGET :
             return updateObject(state , {Target:action.payload}) ;
        case ADD_LOCALE :
            var obj = {
                ...state , 
            locale : action.payload.lang
            }
            return updateObject(state , obj) ;
        default :
            return {
                ...state
            }

    }
};

export default TargetReducer ;