import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        auth?navigate('/'):navigate('/login')
    },[])

    const handleLogin=async()=>{
        let result = await fetch('http://localhost:300/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{'Content-type':'application/json'}
        })
        result = await result.json(result)
        if(result.auth){
            localStorage.setItem('user',JSON.stringify(result.user))
            localStorage.setItem('token',JSON.stringify(result.auth))
            console.log(result.user);
            navigate('/')
        }else{
            alert('Please Enter Correct Details')
        }
    }
  return(
    <div className='w-50 m-auto border mt-4'>
        <div className='form-group m-3'>
            <input type="email" value={email} className='form-control' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='form-group m-3'>
            <input type="password"value={password}  className='form-control' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
            <button onClick={handleLogin} className='btn btn-primary rounded-0 p-0 px-2 m-3 mt-0'>Login</button>
    </div>
  )
}
export default Login