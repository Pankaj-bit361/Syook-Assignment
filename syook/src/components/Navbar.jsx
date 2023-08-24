import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { LoginContext } from '../LoginContext/LoginContextProvider'

const Navbar = () => {

 const navigate=useNavigate()
 let data=JSON.parse(localStorage.getItem("log"))
 const {loginData,setLoginData}=useContext(LoginContext)
 useEffect(()=>{
setLoginData(data)
 },[data?._id])
 

 const handleRemove=()=>{
  localStorage.removeItem("log")
  setLoginData({})
 }


  return (
    <Flex justifyContent={"space-evenly"} bg={"grey"} h={"10vh"} placeItems={"center"} color={'white'}>
    <Text onClick={()=>navigate("/")} fontSize={"20px"} fontWeight={700}>Home</Text>
    <Box>
        <Image onClick={()=>navigate("/")} src={`https://static.wixstatic.com/media/bb36c6_a1c89b5ef32c4e20936d0bf911602e4a~mv2.png/v1/fill/w_144,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Syook%20Logo%20Transparent.png`}/>
    </Box>
    {data?<Text fontSize={"20px"} fontWeight={700}>{data?.name}</Text>:""}
  {data?<Text  fontSize={"20px"} onClick={handleRemove} fontWeight={700}>Logout</Text>:<Text onClick={()=>navigate("/login")} fontSize={"20px"} fontWeight={700}>Login</Text>}

    <Text onClick={()=>navigate("/admin")} fontSize={"20px"} fontWeight={700}>Admin</Text>
    </Flex>
  )
}

export default Navbar