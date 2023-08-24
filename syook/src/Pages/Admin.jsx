
import { Box, Button, Modal,Text, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Divider, Select, Grid,Image, Card, Flex, Heading, IconButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import  axios from "axios"
import Swal from 'sweetalert2';

const init={
  registrationNumber:"",
  vehicleType:"",
  city:"",
  image:"",
  activeOrdersCount:0
}

const Admin = () => {
 
  const [state,setState]=useState(init)
  const [data,setdata]=useState([])


const getData=()=>{
  axios.get(`http://localhost:8080/vehicle`)
  .then((res)=>{
    setdata(res.data)
  })
}

  useEffect(()=>{
getData()
  },[])



   const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )




  

      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = useState(<OverlayOne />)

    const handleVehicle=(e)=>{
   const {name,value}=e.target
   setState({...state,[name]:value}) 
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
     console.log(state)
    axios.post(`http://localhost:8080/vehicle`,state)
    .then((res)=>{
if(res.data=="vehicle added successfully"){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: res.data,
    showConfirmButton: false,
    timer: 1500
  })
  getData()
}else{
  Swal.fire({
    icon: 'error',
    title: res.data,
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
     
      
    })
    setState(init)

    }



  return (
    <Box>
    <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
        colorScheme='blue'
      >
        Add Vehicle in Warehouse
      </Button>
     
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Vehicle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleSubmit}>
      
          
           <Input mt="2%" name="registrationNumber"   placeholder='Reg No. Alphanumeric Ex-abcd1234' onChange={handleVehicle}/>
          
           <Select mt="2%" name="vehicleType"  onChange={handleVehicle}>
            <option value="">Choose The Vehicle</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
           </Select>
           <Input mt="2%" name="image" placeholder='please enter image'  onChange={handleVehicle}/>
           <Input mt="2%" name="city" placeholder='please enter city'  onChange={handleVehicle}/>

           <Button mt="2%" type='submit' w="40%" ml="30%" color={"white"} bg="blackAlpha.900" onClick={onClose} >Create</Button>
           
           </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



      <Grid templateColumns="repeat(1, 1fr)" gap="1rem">
      {data.map((item) => (
        <Card key={item._id} width="100%">
          <Flex alignItems="center" justifyContent="space-around">
            <Box w="18%" display="flex">
              <Image
                
                borderRadius="5%"
                src={item.image}
                w="100px"
                h="100px"
                objectFit="cover"
                mr="3rem"
              />
            </Box>
            <Box w="18%">
              <Heading as="h2" size="md" mb="0.5rem">
                {item.vehicleType}
              </Heading>
             
            </Box>
            <Text fontWeight="500" mb="0.5rem">
                City: {item.city}
              </Text>
              <Text fontWeight="500">activeOrdersCount: {item.activeOrdersCount}</Text>
          
          </Flex>

       
        </Card>
      ))}
    </Grid>

    </Box>
  )
}

export default Admin