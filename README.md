# 리액트 네모찾기 게임

## TODO 

- [ ] favicon 변경
- [ ] font 변경
- [ ] 점수 + 점수 애니메이션 
- [x] 스테이지 변경 애니메이션
- [ ] 타이머 게이지 애니메이션

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

### styled-components 의 keyframes 사용

### styled-components & polished 라이브러리 사용

### Array.from(Array()) 사용

### custom hooks (state를 모듈화해서 사용하기?)

### react에서의 setTimeout, setInterval 의 사용

