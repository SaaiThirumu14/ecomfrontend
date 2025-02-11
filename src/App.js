import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter ,Route,Router ,Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart'
const App = () => {
  const [cartItems, setcartItems]=useState([]);
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <ToastContainer theme='dark'/>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/Search' element={ <Home /> } />
            <Route path='/products/:id' element={ <ProductDetail cartItems={cartItems} setcartItems={setcartItems} /> } />
            <Route path='/Cart' element={ <Cart cartItems={cartItems} setcartItems={setcartItems}/> } />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App