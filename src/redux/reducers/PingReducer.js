import * as actionTypes from "../actions/types";

const pingReducer = (state = { isPinging: false }, action) => {
    switch (action.type) {
        case actionTypes.PING:
            return { isPinging: true };

        case actionTypes.PONG:
            return { isPinging: false };

        default:
            return state;
    }
};

export default pingReducer;
