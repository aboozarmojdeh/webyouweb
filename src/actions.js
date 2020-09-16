import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED

} from './constants';

import axios from 'axios';

export const setSearchField = (text) => {
    // console.log(text)
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

}


export const requestCats = (dispatch) => {
    dispatch({ type: REQUEST_CATS_PENDING });
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }
        ))

}