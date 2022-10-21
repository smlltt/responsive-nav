import React, { ReactNode } from "react";
import { Box } from "theme-ui";

interface ContainerProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: ContainerProps) => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        width: "100%",
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default MainWrapper;
