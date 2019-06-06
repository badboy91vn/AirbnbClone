import * as actionTypes from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case actionTypes.CATEGORY_FETCH:
            return action.payload;
        case actionTypes.CATEGORY_FETCH_SUCCESS:
            return action.payload;
        case actionTypes.CATEGORY_FETCH_FAIL:
            return action.payload;
        default:
            return state;
    }
}
