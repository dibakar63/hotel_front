import React from "react";
import { Box, Container, Grid, Text,SimpleGrid } from "@chakra-ui/react";
import CommonHeading from "../../components/Heading/Heading";
import { services } from "../../components/data";

export default function Services() {
  return (
    <Box py={5}>
      <Container maxW="container.xl">
        <Box textAlign="center" className="wow fadeInUp" data-wow-delay="0.1s">
          <CommonHeading heading="Our Services" title="Services" subtitle="Explore Our" />
        </Box>
        <SimpleGrid  minChildWidth='400px'  gap={4} placeItems='center'>
          {services.map((item, index) => (
            <Box key={index} className="wow fadeInUp" data-wow-delay="0.1s" width='350px' mt={10}>
              <a href="" className="service-item rounded">
                <Box className="service-icon bg-transparent border rounded p-1">
                  <Box w="100%" h="100%" border="1px" rounded="md" display='flex' alignItems='center' justifyContent='center'  >
                   <Text fontSize='25px' textAlign='center'> {item.icon}</Text>
                  </Box>
                </Box>
                <Text as="h5" mt={3} mb={2}>
                  {item.name}
                </Text>
                <Text className="text-body mb-0">{item.discription}</Text>
              </a>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
