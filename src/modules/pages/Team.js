import React from "react";
import { socialIcons, team } from "../../components/data";
import { Box, Container, Text, Link } from "@chakra-ui/react";
import CommonHeading from "../../components/Heading/Heading";

export default function Teams() {
  return (
    <Box py={5} className="container-xxl">
      <Container>
        <CommonHeading heading="Our Team" subtitle="Explore Our" title="Staffs" />
        <Box className="row g-4">
          {team.map((item, index) => (
            <Box
              key={index}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <Box className="rounded shadow overflow-hidden">
                <Box position="relative">
                  <img width='300px' src={item.image} alt="img" />
                  <Box
                    style={{position:"absolute",
                    left:"50%",
                    top:"90%",
                    transform:"translate(-50%, -50%)"}}
                    display="flex"
                    alignItems="center"
                  >
                    {socialIcons.slice(0, 3).map((val, index) => (
                      <Link
                        key={index}
                        href=""
                        className="btn btn-square btn-primary mx-1"
                      >
                        {val.icon}
                      </Link>
                    ))}
                  </Box>
                </Box>
                <Box textAlign="center" p={4} mt={3}>
                  <Text fontWeight="bold" mb={0}>{item.name}</Text>
                  <Text fontSize="sm">{item.designation}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
