// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {
initialValue?:number
};


interface CounterState {
    counter: number,
    clicks: number
}
export const CounterBy = ({initialValue = 5}: Props) => {
    const [counterState,setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });
    const {counter, clicks} = counterState;

    const handleClick = (value:number) => {
      setCounterState( prevState => ({
          counter: prevState.counter + value,
          clicks: prevState.clicks+1
      }));
    }

    return (
        <>
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={()=>handleClick(1)}>+ 1</button>
            <button onClick={()=>handleClick(5)}>+ 1</button>
        </>
    );
};
