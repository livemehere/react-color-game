import React, {useEffect} from 'react';
import useTimer from "../../hooks/useTimer";

const Play = () =>{
    const {count,startTimer,pauseTimer,resetTimer,minusTime} = useTimer(15,1000);
    useEffect(()=>{

    },[])
    return <div>
        <h1>Play</h1>
        <div>
            <button onClick={()=>startTimer()}>start</button>
            <button onClick={()=>pauseTimer()}>pause</button>
            <button onClick={()=>resetTimer()}>reset</button>
            <button onClick={()=>minusTime(5)}>minus</button>
        </div>
        <div>{count}</div>
    </div>
}

export default Play;