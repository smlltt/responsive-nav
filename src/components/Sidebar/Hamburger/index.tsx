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
        right: [50, 50, 100],
        height: "2rem",
        justifyContent: "space-around",
        opacity: isOpen ? 0.6 : 1,
        flexFlow: "column nowrap",
      }}
      onClick={toggleDisplay}
    >
      <Line
        sx={{
          transform: isOpen ? "translateX(-150%) rotate(45deg)" : "rotate(0)",
          transformOrigin: "top left",
        }}
      />
      <Line
        sx={{
          transform: isOpen ? "translateX(-150%)" : "0",
          opacity: isOpen ? 0 : 1,
        }}
      />
      <Line
        sx={{
          transform: isOpen ? "translateX(-150%) rotate(-45deg)" : "rotate(0)",
          transformOrigin: "bottom left",
        }}
      />
    </Flex>
  );
};

export default Hamburger;
