import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { Menu } from "react-feather";

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
          fontFamily: "main",
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
            position: "fixed",
            top: 30,
            right: [115, 115, 165],
          }}
          onClick={toggleDisplay}
        >
          <Menu />
        </Box>

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
