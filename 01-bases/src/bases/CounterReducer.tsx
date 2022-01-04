// @flow
import * as React from 'react';
import {useReducer} from "react";

const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 15,
    changes: 20
}

interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

type CurrentAction =
     | { type: "increaseBy", payload: { value: number, } }
     | { type: "reset"}

const counterReducer = (state: CounterState, action: CurrentAction): CounterState => {
    switch (action.type) {

        case 'reset':{
           return {
               counter: 0,
               previous: 0,
               changes: 0
           }
        }
        default:
            return state;
    }
}
export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const {counter } = state
    const handleClick = () => {
        // setCounter(counter + 1);
        dispatch({ type:'reset'})
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>R E S E T</button>
        </>
    );
};
