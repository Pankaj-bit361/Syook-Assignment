
import { Box, Button, Modal,Text, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Divider, Select, Grid,Image, Card, Flex, Heading, IconButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import  axios from "axios"

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
      console.log(res.data)
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

           <Button mt="2%" type='submit' w="40%" ml="30%" color={"white"} bg="blackAlpha.900" >Create</Button>
           
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
            <Flex w="18%" justifyContent="flex-end">
              <IconButton
                colorScheme="red"
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => handleDelete(item._id)}
                mr="0.5rem"
              />
              <IconButton
                colorScheme="blue"
                aria-label="Edit"
                onClick={() => handleOpenModalEdit(item)}
                icon={<EditIcon />}
              />
            </Flex>
          </Flex>

          {/* <Modal
            initialFocusRef={initialRef}
            isOpen={isOpenEdit}
            onClose={handleCloseModalEdit}
            bg="grey"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Item</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl mt={4}>
                  <FormLabel>Product Image</FormLabel>
                  <Input
                    name="Img"
                    value={data1.Img}
                    onChange={handleChange1}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    name="Name"
                    value={data1.Name}
                    onChange={handleChange1}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    name="Price"
                    value={data1.Price}
                    onChange={handleChange1}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Product Quantity</FormLabel>
                  <Input
                    name="Quantity"
                    value={data1.Quantity}
                    onChange={handleChange1}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                  onClick={(e) => handlesubmit1(e,item._id)}
                >
                  Save
                </Button>
                <Button onClick={handleCloseModalEdit}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
        </Card>
      ))}
    </Grid>

    </Box>
  )
}

export default Admin