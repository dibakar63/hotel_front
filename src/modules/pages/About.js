import React from "react";
import { Box, Container, Flex, Image, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { about } from "../../components/data";
import image1 from '../../assets/img/about-1.jpg'
import image2 from '../../assets/img/about-2.jpg'
import image3 from '../../assets/img/about-3.jpg'
import image4 from '../../assets/img/about-4.jpg'
import { FaBuilding } from "react-icons/fa";

export default function About() {
  return (
    <Box py={5} bg="gray.100">
      <Container maxW="container.xl" display='flex' alignItems='center' justifyContent='center'>
        <SimpleGrid minChildWidth='300px' gap={6} >
          <Box  p={4} display='column' alignItems='center' justifyContent='center'>
            <Text
              as="h6"
              color="#FEA116"
              textTransform="uppercase"
              fontSize="lg"
              mb={2}
            >
              About Us
            </Text>
            <Text as="h1" fontSize="4xl" mb={4}>
              Welcome to{" "}
              <Text as="span" color="#FEA116">
                Hotelier
              </Text>
            </Text>
            <Text mb={4} fontSize='md' textAlign='center'>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet
            </Text>
            <Flex flexWrap="wrap" mb={4} alignItems='center' justifyContent='center' gap={10}>
              {about.map((item, key) => (
                <Box
                  key={key}
                  flex={{ base: "0 0 100%", sm: "0 0 50%", md: "0 0 33.33%" }}
                  mb={{ base: "3", md: "0" }}
                >
                  <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={1}
                    textAlign="center"
                    boxShadow="dark-lg"
                  >
                    <Box
                      borderRadius="md"
                      p={10}
                      style={{
                        border: "1px solid gray",
                        borderRadius: "6px",
                        boxShadow: "xl",
                        width: "90px",
                      }}
                    >
                      <Text fontSize="22px" color="#FEA116">
                        {item.icon}
                      </Text>
                      <Text fontWeight="bold" color="black" mb={1}>
                        {item.count}
                      </Text>
                      <Text>{item.text}</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Flex>
            <Button
              color="white"
              border="none"
              w="200px"
              height="49px"
              bg="#FEA116"
              _hover={{ color: "black" }}
              p={8}
              borderRadius="2px"
              py={3}
              px={5}
              mt={2}
              
            >
              Explore More
            </Button>
          </Box>
          <SimpleGrid minChildWidth='220px' placeItems='center'>
            
              <Image
                src={image1}
                alt="About Image 1"
                borderRadius="md"
                boxShadow="lg"
               h='190px'
                mb={{ base: "3", md: "0" }}
                mt={20}
              />
              <Image
                src={image2}
                alt="About Image 2"
                borderRadius="md"
                boxShadow="lg"
                w={{ base: "175px", md: "250px" }}
                mb={{ base: "3", md: "0" }}
                mt={20}
                h='190px'
              />
            
            
              <Image
                src={image3}
                alt="About Image 3"
                borderRadius="md"
                boxShadow="lg"
                w={{ base: "175px", md: "250px" }}
                mb={{ base: "3", md: "0" }}
                mt={20}
                h='190px'
              />
              <Image
                src={image4}
                alt="About Image 4"
                borderRadius="md"
                boxShadow="lg"
                w={{ base: "175px", md: "250px" }}
                mt={20}
                h='190px'
              />
           
          </SimpleGrid >
        </SimpleGrid>
      </Container>
    </Box>
  );
}
