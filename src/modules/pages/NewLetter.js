import React from "react";
import { Box, Container, Text, Input, Button } from "@chakra-ui/react";

export default function Newsletter() {
  return (
    <Box className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
      <Container>
        <Box className="row justify-content-center">
          <Box className="col-lg-10 border rounded p-1">
            <Box className="border rounded text-center p-1">
              <Box className="bg-white rounded text-center p-5">
                <Text as="h4" mb={4}>
                  Subscribe Our
                  <Text as="span" className="text-primary text-uppercase">
                    Newsletter
                  </Text>
                </Text>
                <Box className="position-relative mx-auto" maxW="400px">
                  <Input
                    className="form-control w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <Button
                    type="button"
                    className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
