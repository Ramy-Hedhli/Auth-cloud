import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loged } from "../Redux/Actions/AuthActions"

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Loged())
    }, [])
    const user = useSelector(state => state.AuthReducer.user)

    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.Adress}</h3>

        </div >
    )
}

export default Profile