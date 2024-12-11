import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
 
    const navigate = useNavigate()

    function handlesubmit() {
        console.log(email,password);
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyCvhJ3x3mRa_Luu7CGBsNoweK27jdSuq2o`,{email,password})
        .then((res) => { sessionStorage.setItem("token",res.data.idToken)
        navigate("/")
    })

        .catch((err) => console.log(err))
    }

  return (
    <div className='container p-5 col-md-4'>
        <h2 className='text-center my-4'>Login</h2>+6+8
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" 
            className="form-label">Email address</label>
            <input type="email" 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="form-control" 
            id="exampleFormControlInput1"  />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" 
            className="form-label">Password</label>
            <input type="password" 
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="form-control" 
            id="exampleFormControlInput1"  />
        </div>
    <button className='btn btn-primary' onClick={(handlesubmit)}>Login</button>
    </div>
  )
}

export default Login