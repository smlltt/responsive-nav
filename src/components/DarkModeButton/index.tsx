import React from "react";
import { Box, useColorMode } from "theme-ui";
import { Moon, Sun } from "react-feather";

const DarkModeButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box
      sx={{
        width: "30px",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {colorMode === "dark" ? <Sun /> : <Moon />}
    </Box>
  );
};

export default DarkModeButton;
