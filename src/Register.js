import React, { useContext } from 'react'
import { UserContext } from './App'
export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>

    <div>Register</div>
    <button onClick={() => setFlag((prevState) => 1)}>Submit</button>
    </>
  )
}