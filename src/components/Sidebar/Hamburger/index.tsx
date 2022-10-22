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
        height: "1.5rem",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: isOpen ? 0.7 : 1,
      }}
      onClick={toggleDisplay}
    >
      <Line isOpen={isOpen} />
      <Line />
      <Line />
    </Flex>
  );
};

export default Hamburger;
