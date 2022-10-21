import React from "react";
import { Box, Flex } from "theme-ui";

const Navbar = () => {
  return (
    <Flex
      sx={{
        color: "text",
        fontFamily: "main",
        ml: "auto",
        display: ["none", "none", "none", "block"],
        width: "600px",
        mt: 30,
        pr: 30,
      }}
    >
      <Flex sx={{ justifyContent: "space-between" }}>
        <Box>Home</Box>
        <Box>About us</Box>
        <Box>Contact us</Box>
        <Box>Sign in</Box>
        <Box>Sign up</Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;