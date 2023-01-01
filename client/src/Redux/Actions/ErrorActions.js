import { ALERT_ERROR, CLEAR_ERROR } from "../TypeActions/ErrorTypes"

export const AlertError = (msg) => (dispatch) => {
    try {
        const id = Math.random()
        dispatch({
            type: ALERT_ERROR,
            payload: { id, msg }
        })
        setTimeout(() => {
            dispatch({
                type: CLEAR_ERROR,
                payload: id
            })
        }, 5000);
    } catch (error) {
        console.log(error)
    }
}