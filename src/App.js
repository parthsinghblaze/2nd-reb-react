import React, { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import Navbar from './component/Navbar'
import Cocktails from './pages/Cocktails'
import CocktailDetail from './pages/CocktailDetail'
import PrivateRoute from './component/PrivateRoute'
import Login from './pages/Login'

export const WrapperContext = createContext()

function App() {

  const [ searchFormValue, setSearchFormValue ] = useState("")
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
    <WrapperContext.Provider value={{ searchFormValue, setSearchFormValue, isLogin, setIsLogin }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path='/product/:id' element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktails' element={<PrivateRoute><Cocktails /></PrivateRoute>} />
        <Route path='/cocktails/:id' element={<PrivateRoute><CocktailDetail /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h2>Page not Found</h2>} />
      </Routes>
    </WrapperContext.Provider>

    </>
  )
}

export default App