import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import Cart from './pages/Cart/Cart'
import CartContextProvider from './contexts/CartContext'


function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/details/:productId' element={<ItemDetails />}/>
        </Routes>
        <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
