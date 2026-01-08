import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddCart from './Components/AddCart'
import Products from './Components/Products'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import Checkout from "./Components/Checkout";
function App() {
  

  return (
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
       <Footer />
      </Router>
      
  )
}

export default App