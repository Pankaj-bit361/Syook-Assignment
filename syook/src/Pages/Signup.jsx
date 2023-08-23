import React, { useState } from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const init={
    "email":"",
    "password":"",
    "city":"",
    "name":""
}

const Signup = () => {

const [state,setState]=useState(init)    
const navigate=useNavigate()

const handleChange=(e)=>{
    const {name,value}=e.target   
    setState({...state,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault() 
    axios.post(`http://localhost:8080/customer/signup`,state)
    .then((res)=>{
        console.log(res.data)
    })
}



  return (
    <Flex mt="5%" flexDirection={"column"}  placeContent={"center"} placeItems={"center"}>
   <Box w="30%"  >
   <form onSubmit={handleSubmit}>
   <Text fontSize={"30px"} fontWeight={600}>Signup</Text>
<Input placeholder='Enter email' name="email" onChange={handleChange}/>
<Input placeholder='Enter name' name="name" onChange={handleChange}/>
<Input placeholder='Enter city' name="city" onChange={handleChange}/>
<Input placeholder='Enter password' name="password" onChange={handleChange}/>
<Button type="submit" bg="green" mt="2%" color="white">Sign Up</Button>
<Button colorScheme='red' mt="2%" onClick={()=>navigate("/login")}>Login</Button>

</form>
</Box> 
    </Flex>
  )
}

export default Signup