import { ALERT_ERROR, CLEAR_ERROR } from "../TypeActions/ErrorTypes"

const initialstate = []

const ErrorReducer = (state = initialstate, action) => {
    switch (action.type) {

        case ALERT_ERROR: return [...state, action.payload]
        case CLEAR_ERROR: return state.filter(el => el.id !== action.payload)
        default: return state

    }
}

export default ErrorReducer