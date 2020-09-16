import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED

} from './constants';

const initialStateSearch = {
    searchField: ""
}

export const searchCats = (state = initialStateSearch, action = {}) => {
    // console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({}, state, { searchField: action.payload });
            return { ...state, searchField: action.payload }

        default:
            return state;
    }
}

const initialStateCats = {
    cats: [],
    error: "",
    isPending: false
}

export const requestCats = (state = initialStateCats, action = {}) => {
    switch (action.type) {
        case REQUEST_CATS_PENDING:
            return { ...state, isPending: true }

        case REQUEST_CATS_SUCCESS:
            return { ...state, cats: action.payload, isPending: false }

        case REQUEST_CATS_FAILED:
            return { ...state, error: action.payload, isPending: false }

        default:
            return state;
    }
}