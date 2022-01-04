// @flow
import * as React from 'react';
import {useReducer} from "react";
import {CounterState} from "./interfaces/interfaces";
import {counterReducer} from "./state/counterReducer";
import {doIncreaseBy, doReset} from "./actions/actions";

const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 15,
    changes: 20
}

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const {counter } = state
    const handleReset = () => {
        // setCounter(counter + 1);
        dispatch(doReset())
    }

    const increaseBy = (value: number)=>{
        dispatch(doIncreaseBy(value))
    }

    return (
        <>
            <h1>Counter reducer: {counter}</h1>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
            <button onClick={handleReset}>R E S E T</button>
            <button onClick={()=>increaseBy(1)}>+ 1</button>
            <button onClick={()=>increaseBy(5)}>+ 5</button>
            <button onClick={()=>increaseBy(10)}>+ 10</button>
        </>
    );
};
