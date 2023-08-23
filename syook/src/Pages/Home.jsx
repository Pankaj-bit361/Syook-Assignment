import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VehicleCard from '../components/VehicleCard'
import { Box, SimpleGrid } from '@chakra-ui/react'

const Home = () => {

const [state,setState]=useState([])


const getData=()=>{
  axios.get(`http://localhost:8080/vehicle`)
  .then((res)=>{
    setState(res.data)
  })
}

useEffect(()=>{

getData()

},[])

  return (
    <div>
   <SimpleGrid w={"80%"} columns={[3]} gap={"5%"} margin={"auto"} mt="2%">
   {state && state.map((item)=>(
    <Box key={item._id}>
      <VehicleCard  {...item}/>
    </Box>
   ))}
</SimpleGrid>
    </div>
  )
}

export default Home