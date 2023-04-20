import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import Navbar from './component/Navbar'
import Cocktails from './pages/Cocktails'
import CocktailDetail from './pages/CocktailDetail'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/cocktails' element={<Cocktails />} />
      <Route path='/cocktails/:id' element={<CocktailDetail />} />
      <Route path='*' element={<h2>Page not Found</h2>} />
    </Routes>
    </>
  )
}

export default App