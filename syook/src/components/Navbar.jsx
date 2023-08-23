import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-evenly"} bg={"grey"} h={"10vh"} placeItems={"center"} color={'white'}>
    <Text fontSize={"20px"} fontWeight={700}>Home</Text>
    <Box>
        <Image src={`https://static.wixstatic.com/media/bb36c6_a1c89b5ef32c4e20936d0bf911602e4a~mv2.png/v1/fill/w_144,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Syook%20Logo%20Transparent.png`}/>
    </Box>
<Text fontSize={"20px"} fontWeight={700}>Login</Text>
    
    </Flex>
  )
}

export default Navbar