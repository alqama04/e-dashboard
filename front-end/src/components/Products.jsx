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
    let result = await fetch(`http://localhost:300/delete/${id}`,{
      method:'Delete'
    })
    result = await result.json()
    if(result){
      alert('Object Deleted')
      getProducts()
    }
  }

  return (
    <div className="">
      <h1 className="ps-5 ms-3 text-decoration-underline">Product List</h1>
      <ul>
      <ul className="ul">
      <li>S.No</li>
      <li>Name</li>
      <li>Price</li>
      <li>Category</li>
      <li>Action</li>
      </ul>
      
      
     {product.map((item,index)=>
    {
        return(
        <ul className="myul" key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li className="d-flex">
        <button onClick={()=>deleteProduct(item._id)} className='btn btn-sm btn-danger'>Delete</button>
        <Link to='/update' className='btn btn-sm btn-warning mx-1'>Update</Link>
        </li>
    </ul>
        )
    }
     )}
     </ul>
    </div>
  );
};

export default Products;
