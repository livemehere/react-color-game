import React, {useCallback, useEffect, useRef, useState} from "react";


function useTimer(initialTime, ms) {
    const [count, setCount] = useState(initialTime);
    const intervalRef = useRef(null);


    const startTimer = useCallback(() => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, ms)
    }, []);

    const pauseTimer = useCallback(() => {
        if (intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, [])

    const resetTimer = useCallback(() => {
        setCount(initialTime);
    }, []);

    const minusTime = useCallback((value) => {
        setCount(prev => prev - value);
    }, [])

    return {count, startTimer, pauseTimer, resetTimer, minusTime};
}

export default useTimer;