import React, { FC } from "react";
import { Flex } from "theme-ui";
import Line from "./Line";

interface HamburgerProps {
  toggleDisplay: () => void;
  isOpen: boolean;
}

const Hamburger: FC<HamburgerProps> = ({ toggleDisplay, isOpen }) => {
  return (
    <Flex
      sx={{
        position: "fixed",
        top: 30,
        right: [100, 100, 150],
        height: "2rem",
        justifyContent: "space-around",
        opacity: isOpen ? 0.7 : 1,
        flexFlow: "column nowrap",
      }}
      onClick={toggleDisplay}
    >
      <Line
        sx={{
          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
        }}
      />
      <Line
        sx={{
          transform: isOpen ? "translateX(100%)" : "0",
          opacity: isOpen ? 0 : 1,
        }}
      />
      <Line
        sx={{
          transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
        }}
      />
    </Flex>
  );
};

export default Hamburger;
