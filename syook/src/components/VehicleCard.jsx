import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const VehicleCard = ({image,city,vehicleType}) => {
  return (
    <Box border={"1px solid black"} >
<Box >
    <Image height={"250px"}   src={image} alt={"image"}/>
</Box>
<Text font={"20px"} mt="2%" textTransform={"capitalize"} letterSpacing={"1px"} fontWeight={"700"}>{city}</Text>
<Text font={"20px"} mt="2%" textTransform={"capitalize"} letterSpacing={"1px"} fontWeight={"600"}>{vehicleType}</Text>
<Button w="50%" mt="2%" mb="4%" bg='grey' color="white">Book Now</Button>

    </Box>
  )
}

export default VehicleCard