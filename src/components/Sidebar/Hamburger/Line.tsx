import React, { FC } from "react";
import { Box, BoxProps } from "theme-ui";

interface LineProps extends BoxProps {}

const Line: FC<LineProps> = ({ ...rest }) => (
  <Box
    sx={{
      width: "2rem",
      height: "0.25rem",
      background: "primary",
      borderRadius: 10,
      transition: "0.3s linear",
      ...rest.sx,
    }}
  />
);

export default Line;
