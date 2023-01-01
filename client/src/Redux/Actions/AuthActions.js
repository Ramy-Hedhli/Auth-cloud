import { FAIL, LOGED, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthTypes"
import axios from 'axios'
import { AlertError } from "./ErrorActions"

export const Register = (nwuser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/register', nwuser)
        dispatch({
            type: REGISTER,
            payload: res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
        error.response.data.errors.forEach(el => {
            dispatch(AlertError(el.msg))
        });
    }
}
export const Login = (loguser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/signIn', loguser)
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
        error.response.data.errors.forEach(el => {
            dispatch(AlertError(el.msg))
        });
    }
}

export const Loged = () => async (dispatch) => {
    const Config = {
        headers: {
            Auth: localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/auth/Profile', Config)
        dispatch({
            type: LOGED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}

export const Logout = () => {
    return (
        {
            type: LOGOUT
        }
    )
}