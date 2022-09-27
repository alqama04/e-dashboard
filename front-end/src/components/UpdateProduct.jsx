// echo "# my" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/alqama04/my.git
// git push -u origin main

import { useState,useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct=()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProductDetail()
    }, []);
    
    const getProductDetail=async()=>{
        let result =await fetch(`http://localhost:300/product/${params.id}`)
        result =await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
  
    const updateProduct=async()=>{
        let result =await fetch(`http://localhost:300/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        navigate('/')
        
    }
    return(
        <div>
            <div className='w-50 m-auto border mt-4  pe-3 pb-2'>
            <h1 className='ps-2 text-decoration-underline'>Update Product</h1>
                <input type="text" value={name} placeholder='Enter Name' className='form-control m-2 rounded-0' onChange={(e)=>setName(e.target.value)}/>
                <input type="text" value={price} placeholder='Enter Price' className='form-control m-2' onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" value={category} placeholder='Enter Category' className='form-control m-2' onChange={(e)=>setCategory(e.target.value)}/>
                <input type="text" value={company} placeholder='Enter Company' className='form-control m-2' onChange={(e)=>setCompany(e.target.value)} />
                <button type='button' onClick={updateProduct} className='btn btn-primary py-1 px-5 mt-2 ms-2 rounded-0'>Update Product</button>


            </div>
        </div>
    )
}

export default UpdateProduct


