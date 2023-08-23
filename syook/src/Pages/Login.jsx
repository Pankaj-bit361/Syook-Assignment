import React, { useState } from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'

const init={
    "email":"",
    "password":""
}

const Login = () => {

const [state,setState]=useState(init)    

const handleChange=(e)=>{
    const {name,value}=e.target   
    setState({...state,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
 
    axios.post(`http://localhost:8080/customer/login`,state)
    .then((res)=>{
        console.log(res.data)
        localStorage.setItem("log",JSON.stringify(res.data.already))
        localStorage.setItem("token",JSON.stringify(res.data.token))
    })


}



  return (
    <Flex mt="5%" flexDirection={"column"}  placeContent={"center"} placeItems={"center"}>
   <Box w="30%" border={"3px solid black"} >
   <form onSubmit={handleSubmit}>
   <Text fontSize={"30px"} fontWeight={600}>Login</Text>
<Input placeholder='Enter email' name="email" onChange={handleChange}/>
<Input placeholder='Enter password' name="password" onChange={handleChange}/>
<Button type="submit" bg="green" mt="2%" color="white">Login</Button>
<Button colorScheme='red' mt="2%" onClick={()=>navigate("/signup")}>Sign up</Button>
</form>


</Box> 
    </Flex>
  )
}

export default Login