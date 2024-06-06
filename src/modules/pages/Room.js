import React from "react";
import { Box, Container, Grid, Text, Image, Badge, Button, SimpleGrid } from "@chakra-ui/react";
import CommonHeading from "../../components/Heading/Heading";
import { facility, roomItems } from "../../components/data";

export default function Rooms() {
  return (
    <Box py={5}>
      <Container maxW="container.xl" p={10} overflowX="hidden" >
        <CommonHeading heading="Our Rooms" title="Rooms" subtitle="Explore Our"  />
        <SimpleGrid  minChildWidth='300px'  gap={4} placeItems='center' mt={10} >
          {roomItems.map((item, key) => (
            <Box key={key} className="wow fadeInUp" data-wow-delay="0.1s" width='350px' >
              <Box className="room-item shadow rounded ">
                <Box position="relative" style={{overflow:'hidden'}} height='250px'>
                  <Image src={item.img} alt="img" h='250px'/>
                  <Badge  style={{position:'absolute',start:'0%',top:"100%",transform:"translateY(-90%)",zIndex:"2"}} bg="#FEA116" color="white" rounded="md" py={1} px={3} ms={4}>
                    {item.price}
                  </Badge>
                </Box>
                <Box p={4} mt={2} boxShadow='dark-lg'>
                  <Box d="flex" justifyContent="space-between" mb={3}>
                    <Text as="h5" mb={0}>
                      {item.name}
                    </Text>
                    <Box ps={2}>{item.star}</Box>
                  </Box>
                  <Box display="flex" justifyContent='center' alignItems='center' mb={3}>
                    {facility.map((facilityItem, index) => (
                      <Text key={index} className="border-end me-3 pe-3 ml-2" ml={2}  display='flex' justifyContent='center' alignItems='center' color='#FEA116'>
                        {facilityItem.icon}
                        {facilityItem.quantity}
                        <Text color='black' style={{marginLeft:"8px",marginTop:"13px"}}> {facilityItem.facility}</Text>
                      </Text>
                    ))}
                  </Box>
                  <Text className="text-body mb-3" textAlign='left'>{item.description}</Text>
                  <Box d="flex" justifyContent="space-between">
                    <Button as="a" href="" color="white" border='none' w="100%" bg='#FEA116'  _hover={{color:"black"}} p={8} width='123px'  borderRadius='2px' mr={3} py={2} px={4}>
                      {item.yellowbtn}
                    </Button>
                    <Button as="a" href=""color="white" border='none' w="100%" bg='black'  p={8} width='123px'  borderRadius='2px' mr={3} py={2} px={4}>
                     Book now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
