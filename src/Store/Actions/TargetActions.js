import {API_URL, GET_TARGET , ADD_LOCALE} from "./actionType";
import axios from 'axios';

// handle sync code
export const get_Target = (value) => {
    return {
        type: GET_TARGET ,
        payload : {
            Target : value
        }
    }
}
export const add_locale = (value) => {
    return {
        type: ADD_LOCALE ,
        payload : {
            lang : value
        }
    }
}
var phrases = {
            en : {

            } ,
            ar : {

            }
        } ;


// handle async code
export const fetchGetTarget = () => {
    return dispatch => {
        axios.get(API_URL).then(resp => {
            resp.data.Phrases.map(d => {
                phrases.en[d.key] = d.en ;
                phrases.ar[d.key] = d.ar;
            });
            dispatch(get_Target(phrases))
        });
    }
}



