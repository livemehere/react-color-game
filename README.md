# 리액트 네모찾기 게임

## TODO 

- [ ] favicon 변경
- [ ] font 변경

## hooks

### useTimer

```javascript
import React, {useCallback, useEffect, useRef, useState} from "react";


function useTimer(initialTime, ms) {
    const [count, setCount] = useState(initialTime);
    const intervalRef = useRef(null);


    const startTimer = useCallback(() => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setCount(prev => prev + 1);
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
```

## Technic

### styled-components 의 props사용

### polished 라이브러리 사용

### Array.from(Array()) 사용

