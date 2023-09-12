import React from "react";
import { Box, Icon } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <Box
      h="35px"
      w="95%"
      m="auto"
      mt="20px"
      display="flex"
      justifyContent="start"
      gap="15px"
    >
      <Box color="white" fontWeight="bold">
        Taco's Tacos
      </Box>
      <Icon as={StarIcon} mt="4px" color="white" /> |
      <Box color="white">Taco & Co.</Box>
      <Box bg="#DCDCDC" border="1px solid white" borderRadius="50px" w="60px" h="20px" color="grey" mt="3px" textAlign="center">
        Free
      </Box>
      |<Box color="white">Team Visible</Box>
    </Box>
  );
};

export default Navbar;
