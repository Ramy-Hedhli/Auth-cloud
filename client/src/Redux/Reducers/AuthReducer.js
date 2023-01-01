import { FAIL, LOGED, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthTypes"

const initialstate = {
    user: {},
    errors: []
}

const AuthReducer = (state = initialstate, action) => {
    switch (action.type) {
        case REGISTER:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.nwuser, errors: null }
        case FAIL: return { ...state, errors: action.payload, user: null }
        case LOGIN:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.found, errors: null }
        case LOGED: return { ...state, user: action.payload, errors: null }
        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, user: null, errors: null }
        default: return state

    }
}

export default AuthReducer