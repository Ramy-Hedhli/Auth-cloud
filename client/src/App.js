
import './App.css';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import NavUser from './Components/NavUser';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import { Routes, Route } from 'react-router-dom'
import FooterR from './Components/Footer';
import PrivetRoute from './Components/privetRoute';
import Errors from './Components/Errors';


function App() {
  return (
    <div>
      <NavUser />
      <br />
      <br />
      <Errors />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<LogIn />} />
        <Route path='/Profile' element={<PrivetRoute><Profile /></PrivetRoute>} />
      </Routes>
      <FooterR />
    </div>
  );
}

export default App;
