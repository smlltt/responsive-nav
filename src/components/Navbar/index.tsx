import React from "react";
import { Box, Flex } from "theme-ui";
import { DarkModeButton } from "../index";

const Navbar = () => {
  return (
    <Flex
      sx={{
        color: "text",
        fontFamily: "navbar",
        display: ["none", "none", "none", "flex"],
        mt: 30,
        pr: 30,
        width: "100%",
      }}
    >
      <DarkModeButton />
      <Flex
        sx={{
          justifyContent: "space-between",
          ml: "auto",
          width: "600px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
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
