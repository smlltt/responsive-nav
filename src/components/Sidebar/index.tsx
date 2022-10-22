import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import Hamburger from "./Hamburger";

enum DisplayEnum {
  NONE = "none",
  FLEX = "flex",
}

const Sidebar = () => {
  const [displayBar, setDisplayBar] = useState<DisplayEnum>(DisplayEnum.NONE);
  const toggleDisplay = () => {
    displayBar === DisplayEnum.FLEX
      ? setDisplayBar(DisplayEnum.NONE)
      : setDisplayBar(DisplayEnum.FLEX);
  };
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
        <Hamburger
          toggleDisplay={toggleDisplay}
          isOpen={displayBar === DisplayEnum.FLEX}
        />
        <Flex
          sx={{
            display: displayBar,
            background: "background",
            width: "100%",
            position: "fixed",
            top: 100,
            height: "calc(100% - 100px)",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              ml: "auto",
              height: "150px",
              justifyContent: "space-between",
              pr: [50, 50, 100],
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
