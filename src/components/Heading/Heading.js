import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function CommonHeading({ heading, title, subtitle }) {
  return (
    <Box textAlign="center" className="wow fadeInUp" data-wow-delay="0.1s">
      <Text className="section-title" color="primary" textTransform="uppercase">
        {heading}
      </Text>
      <Heading as="h1" mb={5}>
        {subtitle}{" "}
        <Text as="span" color="primary" textTransform="uppercase">
          {title}
        </Text>
      </Heading>
    </Box>
  );
}
