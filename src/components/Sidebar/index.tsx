import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import Hamburger from "./Hamburger";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex
        sx={{
          color: "text",
          fontFamily: "navbar",
          display: ["block", "block", "block", "none"],
          mt: 50,
          pr: 30,
          position: "relative",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            background: "background",
            position: "fixed",
            height: "90px",
            top: 0,
            width: "100%",
          }}
        >
          <Hamburger toggleDisplay={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </Box>
        <Flex
          sx={{
            background: "background",
            width: "100%",
            position: "fixed",
            top: 90,
            height: "100%",
            opacity: isOpen ? 1 : 0,
            //comment out to see the effect
            // transform: isOpen ? "translateX(0)" : "translateX(100%)",
            // transition: "0.3s ease-in-out",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              ml: "auto",
              height: "150px",
              justifyContent: "space-between",
              pr: [50, 50, 100],
              transform: isOpen ? "translateX(0)" : "translateX(100%)",
              transition: "0.3s ease-in-out",
            }}
          >
            <Box>Home</Box>
            <Box>About us</Box>
            <Box>Contact us</Box>
            <Box>Sign in</Box>
            <Box>Sign up</Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
