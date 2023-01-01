import { useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert';

const Errors = () => {
    const erreur = useSelector(state => state.ErrorReducer)
    return (
        <>
            {
                erreur.map(el => <Alert variant='danger'>
                    {el.msg}
                </Alert>)
            }
        </>
    )
}

export default Errors