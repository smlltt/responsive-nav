import React, { FC } from "react";
import { Box } from "theme-ui";

interface LineProps {
  isOpen?: boolean;
}

const Line: FC<LineProps> = ({ isOpen }) => (
  <Box
    sx={{
      width: "2rem",
      height: "0.25rem",
      background: "primary",
      borderRadius: 10,
      transform: isOpen ? "rotate(20deg)" : "rotate(0)",
    }}
  />
);

export default Line;
