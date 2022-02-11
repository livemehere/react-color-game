import { useState } from "react";

function useStage() {
  const [stage, setStage] = useState(1);
  const [animationActive, setAnimationActive] = useState(false);

  const clearStage = () => {
    setStage((prev) => prev + 1);
    setAnimationActive(true);
    setTimeout(() => {
      setAnimationActive(false);
    }, 100);
  };

  const resetStage = () => {
    setStage(1);
  };

  return { stage, animationActive, clearStage, resetStage };
}

export default useStage;
