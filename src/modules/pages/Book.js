import React from "react";
import {
  Container,
  Box,
  Flex,
  Input,
  Select,
  Button,
  Center,
  SimpleGrid
} from "@chakra-ui/react";

export default function Book() {
  return (
    <Center h="fit-content" p={10} className="book" >
      <Box
        className="booking"
        
        pb={5}
        w="80%"
        boxShadow="dark-lg"
        p="35px"
        bg='white'
        position='absolute'
        marginTop="-300px"
        
      >
        <Container maxW="full" className="row">
          <SimpleGrid minChildWidth='150px'
            flexWrap={{ base: "wrap", md: "nowrap" }}
            
            alignItems="center"
            justifyContent="space-evenly"
            boxShadow='dark-lg'
          >
            <Box
              flex={{ base: "1", md: "none" }}
              mb={{ base: "3", md: "0" }}
              mr={{ base: "0", md: "2" }}
            >
              <Input
                type="text"
                placeholder="Check in"
                variant="flushed"
                size="md"
              />
            </Box>
            <Box
              flex={{ base: "1", md: "none" }}
              mb={{ base: "3", md: "0" }}
              mr={{ base: "0", md: "2" }}
            >
              <Input
                type="text"
                placeholder="Check out"
                variant="flushed"
                size="md"
                border='1px solid gray'
                ml={5}
              />
            </Box>
            <Box
              flex={{ base: "1", md: "none" }}
              mb={{ base: "3", md: "0" }}
              mr={{ base: "0", md: "2" }}
            >
              <Select  p={4} size='lg' spacing={4} defaultValue="">
                <option value="">Adult</option>
                <option value="1">Adult 1</option>
                <option value="2">Adult 2</option>
                <option value="3">Adult 3</option>
              </Select>
            </Box>
            <Box flex={{ base: "1", md: "none" }} mb={{ base: "3", md: "0" }}>
              <Select  size="lg" spacing={4} defaultValue="">
                <option value="">Child</option>
                <option value="1">Child 1</option>
                <option value="2">Child 2</option>
                <option value="3">Child 3</option>
              </Select>
            </Box>
            <Box flex={{ base: "1", md: "auto" }} ml={{ base: "0", md: "2" }}>
              <Button color="white" border='none' w="100%" bg='#FEA116'  _hover={{color:"black"}} p={8} width='123px' borderRadius='6px' mr={3}>
                Submit
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Center>
  );
}
