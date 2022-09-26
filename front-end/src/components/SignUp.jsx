import react,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate()
    
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    },[])
    const collectData=async()=>{
        console.log(name,email,password);
        let result =await fetch('http://localhost:300/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{'Content-type':'application/json'}
        });
        result = await result.json();
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result))
        navigate('/')
    }   
    return (
        <div className='w-50 m-auto'>
            <h1>Register</h1>
            <input type="text"  value={name}  onChange={(e)=>setName(e.target.value)}  className='form-control mt-3' placeholder='Enter Name'/>
            <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control mt-3' placeholder='Enter Email'/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control mt-3' placeholder='Enter Password'/>
            <button type='button' onClick={collectData} className='btn btn-primary py-1 px-5 mt-3 rounded-0'>Sign Up</button>
        </div>
    )
}

export default SignUp