import React, { useCallback, useEffect, useRef, useState } from "react";

function useTimer(initialTime, ms) {
  const [count, setCount] = useState(initialTime);
  const [timeActivity, setTimeActivity] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, ms);
  }, []);

  const pauseTimer = useCallback(() => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const resetTimer = useCallback(() => {
    setCount(initialTime);
  }, []);

  const minusTime = useCallback((value) => {
    setTimeActivity(true);
    setTimeout(() => {
      setTimeActivity(false);
    }, 300);
    setCount((prev) => prev - value);
  }, []);

  return { count, startTimer, pauseTimer, resetTimer, minusTime, timeActivity };
}

export default useTimer;
