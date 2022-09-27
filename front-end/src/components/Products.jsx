import React from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'

const Products = () => {
  const [product, setProduct] = React.useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:300/products");
    result = await result.json();
    setProduct(result);
  };

  const deleteProduct=async(id)=>{
    let result = await fetch(`http://localhost:300/product/${id}`,{
      method:'Delete'
    })
    result = await result.json()
    if(result){
      alert('Object Deleted')
      getProducts()
    }
  }


  const searchHandle=async(e)=>{
    let key = e.target.value;
    console.log(key)
    if(key!==''){

      let result = await  fetch(`http://localhost:300/search/${key}`)
      result = await result.json()
      if(result){
        setProduct(result)
      }
    }else{
      getProducts()
    }
  }
  return (
    <div className="">
      <h1 className="ps-5 ms-3 text-decoration-underline">Product List</h1>
      <div className="w-50 m-3">
       <input type="text" onChange={searchHandle} className="form-control w-50 ms-5 rounded-0 border border-2 border-info shadow-none" placeholder="Search Product" />
      </div>
      <ul>
      <ul className="ul">
      <li>S.No</li>
      <li>Name</li>
      <li>Price</li>
      <li>Brand</li>
      <li>Category</li>
      <li>Action</li>
      </ul>
      
      
     {product.length>0?product.map((item,index)=>
    {
        return(
        <ul className="myul" key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.company}</li>
        <li>{item.category}</li>
        <li className="d-flex">
        <button onClick={()=>deleteProduct(item._id)} className='btn btn-sm btn-danger'>Delete</button>
        <Link to={`/update/${item._id}`} className='btn btn-sm btn-warning mx-1'>Update</Link>
        </li>
    </ul>
        )
    }
     ):
     <h4 className="ps-4 m-1"> No Product Found</h4>
     }
     </ul>
    </div>
  );
};

export default Products;
