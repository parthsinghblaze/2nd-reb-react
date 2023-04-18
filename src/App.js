import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<h2>Page not Found</h2>} />
    </Routes>
    </>
  )
}

export default App