import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const InitialState = {
    token: ""
};

export const actionTypes = {
    SET_TOKEN: "SET_TOKEN"
};

// REDUCERS
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            return Object.assign({}, state, {
                token: action.token
            });
        default:
            return state;
    }
};

// ACTIONS
export const setToken = token => dispatch => {
    return dispatch({
        type: actionTypes.SET_TOKEN,
        token: token
    });
};

export function initializeStore(initialState = InitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
