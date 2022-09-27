import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div className="App container ">
      <BrowserRouter>
        <Nav />
      <Routes>
      <Route element={<PrivateComponent />} >
        <Route path="/"  element={<Products/>}  />
        <Route path="/add"  element={<AddProduct/>}  />
        <Route path="/update/:id"  element={<UpdateProduct />}  />
        <Route path="/logout"  element={<h1>logout</h1>}  />
        <Route path="/profile"  element={<h1>profile</h1>}  />
      </Route>
        <Route path="/signup"  element={<SignUp/>}  />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
