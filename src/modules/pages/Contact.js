import React from "react";
import { Heading, Box, Container, Text, Flex, Button, Input, Textarea, SimpleGrid } from "@chakra-ui/react";
import { contact } from "../../components/data";
import CommonHeading from "../../components/Heading/Heading";

export default function Contact() {
  return (
    <>
      <Heading as="h1" textAlign="center" mt={10} mb={5} color='#FEA116'>
        Contact Us
      </Heading>
      <CommonHeading
           
            subtitle="Contact "
            title="For Any Query"
          />

      <Box py={10}>
        <Container maxW="container.xl">
          {/* <Heading as="h2" textAlign="center" mb={5}>
            Contact Us
          </Heading> */}
          <SimpleGrid columns={3} justifyContent="space-between" mb={10}>
            {contact.map((item, index) => (
              <Box key={index} flex="1 0 48%" mb={5}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {item.title}
                </Text>
                <Text color='#FEA116'>{item.icon} {item.email}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Flex flexWrap="wrap" justifyContent="space-between" gap={20} p={20}>
            <Box flex="1 0 48%" mb={10}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: "0", minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
            <Box flex="1 0 48%">
              <Box mb={10}>
                <Heading as="h3" fontSize="xl" mb={5}>
                  Send Us a Message
                </Heading>
                <form>
                  <Flex flexWrap="wrap" justifyContent="space-between" mb={3}>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      mb={8}
                      variant='flushed'
                      bg='white'
                      height='49px'
                     
                      border='1px solid gray'
                      borderRadius='6px'
                      p={10}
                      flex={{ base: "1 0 100%", md: "1 0 48%" }}
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      mb={8}
                      variant='flushed'
                      bg='white'
                      height='49px'
                      
                      border='1px solid gray'
                      borderRadius='6px'
                      p={10}
                      flex={{ base: "1 0 100%", md: "1 0 48%" }}
                    />
                    <Input
                      type="text"
                      placeholder="Subject"
                      mb={8}
                      variant='flushed'
                      bg='white'
                      height='49px'
                      
                      border='1px solid gray'
                      borderRadius='6px'
                      p={10}
                      flex="1 0 100%"
                    />
                    <Textarea
                      placeholder="Leave a message here"
                      mb={8}
                      variant='flushed'
                      bg='white'
                      height='49px'
                      
                      border='1px solid gray'
                      borderRadius='6px'
                      p={10}
                      style={{ resize: "none" }}
                      flex="1 0 100%"
                    />
                    <Button
                     color="white" border='none'  bg='#FEA116'  _hover={{color:"black"}}
                      size="lg"
                      w="100%"
                      height='49px'
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Flex>
                </form>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
