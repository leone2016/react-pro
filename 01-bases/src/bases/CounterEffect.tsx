// @flow
import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";


export const CounterEffect = () => {
    const MAX_COUNTER = 10;
    const [counter,setCounter] = useState(5);
    const currentElement = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
       if (counter >= 10){
        console.log("%c Se ha llegado al valor esperado", "color: red; font-size: 20px")
        // to desde la posicion inicial a otra posicion final

        const timeLine = gsap.timeline();

        timeLine
            .to(currentElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
            .to(currentElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
       }
    }, [counter]);


    const handleClick = () => {
      setCounter(prevState => Math.min( prevState +1, MAX_COUNTER));
    }

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={currentElement}>{counter}</h2>
            <button onClick={handleClick}>+ 1</button>
        </>
    );
};
