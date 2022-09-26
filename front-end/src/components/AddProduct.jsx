import { useState } from 'react'

const AddProduct=()=>{
    const auth = localStorage.getItem('user')
    const userId = JSON.parse(auth)._id
    const [name,setName]=useState('');
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    
    const handleAddProduct=async()=>{
        let product =await fetch('http://localhost:300/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{'Content-type':'application/json'}

        })
        product = await product.json(product)
        console.log(product.name);
    }
    return(
        <div>
            <div className='w-50 m-auto'>
            <h1>Add Product</h1>
                <input type="text" value={name} placeholder='Enter Name' className='form-control m-2 rounded-0' onChange={(e)=>setName(e.target.value)}/>
                <input type="text" value={price} placeholder='Enter Price' className='form-control m-2' onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" value={category} placeholder='Enter Category' className='form-control m-2' onChange={(e)=>setCategory(e.target.value)}/>
                <input type="text" value={company} placeholder='Enter Company' className='form-control m-2' onChange={(e)=>setCompany(e.target.value)} />
                <button onClick={handleAddProduct} className='m-2 mt-0 rounded-0 btn btn-primary p-0 px-2'>Submit</button>
            </div>
        </div>
    )
}

export default AddProduct