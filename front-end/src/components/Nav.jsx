import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div className='border-bottom bg-info'>
    <ul className='d-flex list-unstyled justify-content-start'>
      <div className="logo fw-bold p-2 pb-0 text-decoration-underline"><h3><Link className='text-white' to='/'>MySite</Link></h3></div>
      {auth?
      <>
        <li className='px-3 mt-2'><Link className='text-white' to='/'>Products</Link></li>
        <li className='px-3 mt-2'><Link className='text-white' to='/Add'>Add Products</Link></li>
        <li className='px-3 mt-2'><Link className='text-white' to='/update'>Update Products</Link></li>
        <li className='px-3 mt-2'><Link className='text-white' to='/profile'>profile</Link></li>
        <li className='px-3 mt-2'><Link onClick={logout} className='text-white' to='/signup'>Logout</Link></li>
        <li className="px-3 mt-2 text-white">{JSON.parse(auth).name}</li>
      </>
      :
      <>
        <li className='px-3 mt-2'><Link className='text-white' to='/signup'>Signup</Link></li>
        <li className='px-3 mt-2'><Link className='text-white' to='/login'>login</Link></li>
      </> 
      }
    </ul>
    </div>
  )
}

export default Nav