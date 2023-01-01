import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../Redux/Actions/AuthActions';

const NavUser = () => {
    const user = useSelector(state => state.AuthReducer.user)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            {
                token && user ?
                    <>
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand>Auth Workshop</Navbar.Brand>
                                <Navbar.Toggle />
                                <Container>
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                        <Nav.Link as={Link} to='/Profile'>Profile</Nav.Link>
                                    </Nav>
                                </Container>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        Signed in as: <span>{user.name}</span>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Container>
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => { dispatch(Logout()); navigate('/') }}>Log Out</Nav.Link>
                            </Nav>
                        </Navbar>
                    </>
                    : <>
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand>Auth Workshop</Navbar.Brand>
                                <Navbar.Toggle />
                                <Container>
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                        <Nav.Link as={Link} to='/signIn'>Log In</Nav.Link>
                                        <Nav.Link as={Link} to='/signUp'>Sign Up</Nav.Link>
                                    </Nav>
                                </Container>
                            </Container>
                        </Navbar>
                    </>
            }
        </div >
    )
}
export default NavUser