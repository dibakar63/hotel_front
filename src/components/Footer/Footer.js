import React from "react";
import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data";
import Newsletter from "../../modules/pages/NewLetter";
import { Box, Container, Text, Link as ChakraLink, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <Box className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
        <Container pb={5}>
          <Box className="row g-5">
            <Box className="col-md-6 col-lg-4">
              <Box bg="primary" rounded="md" p={4}>
                <Link to="/">
                  <Text as="h1" color="white" textTransform="uppercase" mb={3}>
                    Hotelier
                  </Text>
                </Link>
                <Text color="white" mb={0}>
                  Build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
                </Text>
              </Box>
            </Box>
            <Box className="col-md-6 col-lg-3">
              <Text as="h6" className="section-title" color="primary" textTransform="uppercase" mb={4}>
                Contact
              </Text>
              {footerContact.map((val, index) => (
                <Text key={index} mb={2}>
                  {val.icon} {val.name}
                </Text>
              ))}
              <Box pt={2} display='flex' alignItems='center' justifyContent='center'>
                {socialIcons.slice(0, 4).map((val, index) => (
                  <ChakraLink key={index} href="" className="btn btn-outline-light btn-social">
                    {val.icon}
                  </ChakraLink>
                ))}
              </Box>
            </Box>
            <Box className="col-lg-5 col-md-12">
              <Box className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <Box className="col-md-6" key={sectionIndex}>
                    <Text as="h6" className="section-title" color="primary" textTransform="uppercase" mb={4}>
                      {section.header}
                    </Text>
                    {section.UnitItem.map((item, itemIndex) => (
                      <ChakraLink key={itemIndex} href="" className="btn btn-link">
                        {item.name}
                      </ChakraLink>
                    ))}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
