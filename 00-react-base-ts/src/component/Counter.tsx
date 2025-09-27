// @flow
import {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br/>
            <button className="btn btn-warning " onClick={increment}>Increment</button>
        </div>
    );
};