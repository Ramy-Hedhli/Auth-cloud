import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Register } from '../Redux/Actions/AuthActions';
const SignUp = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleReg = (a) => {
        a.preventDefault()
        dispatch(Register({ name, age, adress, phone, email, password }, navigate))

    }
    return (
        <form className='bodyyy'>
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput type="text" onChange={(e) => setName(e.target.value)} id='form6Example1' label='Name' />
                </MDBCol>
                <MDBCol>
                    <MDBInput type="number" onChange={(e) => setAge(e.target.value)} id='form6Example2' label='age' />
                </MDBCol>
            </MDBRow>
            <MDBInput type="text" onChange={(e) => setAdress(e.target.value)} wrapperClass='mb-4' id='form6Example4' label='Address' />
            <MDBInput wrapperClass='mb-4' type='tel' onChange={(e) => setPhone(e.target.value)} id='form6Example6' label='Phone' />
            <MDBInput type="email" onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' id='form6Example5' label='Email' />
            <MDBInput type="password" onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' id='form6Example6' label='Password' />
            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form6Example8'
                label='Create an account?'
                defaultChecked
            />

            <MDBBtn onClick={(e) => handleReg(e)} className='mb-4' type='submit' block>
                Register
            </MDBBtn>
        </form>
    )
}
export default SignUp