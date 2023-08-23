import React from 'react'
import {Routes,Route} from "react-router-dom"
import Admin from '../Pages/Admin'
import Home from '../Pages/Home'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/admin"} element={<Admin/>}/>
    </Routes>
  )
}

export default AllRoutes