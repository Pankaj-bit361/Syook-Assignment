import React from 'react'
import {Routes,Route} from "react-router-dom"
import Admin from '../Pages/Admin'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/admin"} element={<Admin/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default AllRoutes