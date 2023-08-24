import { Box, Button, Modal,Text, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Divider, Select, Grid,Image, Card, Flex, Heading, IconButton } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { LoginContext } from '../LoginContext/LoginContextProvider';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from 'react-router-dom';

const init={
  name:"",
  price:0
}

const VehicleCard = ({image,city,vehicleType}) => {

  const [order,setorder]=useState(init)
const navigate=useNavigate()
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)
  const {loginData}=useContext(LoginContext)


const handleOrder=(e)=>{
const {name,value}=e.target
setorder({...order,[name]:value})

}


const handleSubmit=(e)=>{
  e.preventDefault()




axios.post(`http://localhost:8080/item/`,order)
.then((res)=>{

  let data={
    customerId:loginData._id,
    city:loginData.city,
    price:order.price,
    itemId:res.data.data._id
    }

axios.post(`http://localhost:8080/order/`,data)
.then((res)=>{

  if(res.data=="order created successfully") {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: res.data,
      showConfirmButton: false,
      timer: 1500
    })
  }else{

    Swal.fire({
      icon: 'error',
      title: res.data,
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

}) 

})

}
const handleopen=()=>{

if(!loginData?._id){
navigate("/login")
Swal.fire({
  title: 'please login first !!',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
}else{

  setOverlay(<OverlayOne />)
  onOpen()
}


}

  return (
    <Box border={"1px solid black"}  >
<Box >
    <Image height={"250px"}   src={image} alt={"image"}/>
</Box>
<Text font={"20px"} mt="2%" textTransform={"capitalize"} letterSpacing={"1px"} fontWeight={"700"}>{city}</Text>
<Text font={"20px"} mt="2%" textTransform={"capitalize"} letterSpacing={"1px"} fontWeight={"600"}>{vehicleType}</Text>
<Button w="50%" mt="2%" mb="4%" bg='grey' color="white"  onClick={handleopen}>Book Now</Button>

     
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Vehicle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleSubmit}>
      
          
           <Input mt="2%" name="name"   placeholder='please enter the item name' onChange={handleOrder}/>


           <Input mt="2%" name="price" placeholder='please enter price'  onChange={handleOrder}/>

           <Button mt="2%" type='submit' w="40%" ml="30%" color={"white"} onClick={onClose} bg="blackAlpha.900" >Order</Button>
           
           </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </Box>
  )
}

export default VehicleCard