import AnimatedNumber from "react-animated-numbers";
import { SpringConfig } from "react-spring";
import { memo } from "react";

const Score = memo(({ score }) => {
  return (
    <AnimatedNumber
      includeComma
      animateToNumber={score}
      fontStyle={{ fontSize: "40px" }}
    />
  );
});

export default Score;
