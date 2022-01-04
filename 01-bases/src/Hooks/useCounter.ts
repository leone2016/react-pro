import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useCounter = ({maxCount = 1}) => {
    // const MAX_COUNTER = 10;

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const timeLine = useRef(gsap.timeline());

    useLayoutEffect(() => {
        console.log( elementToAnimate.current )
        if(  !elementToAnimate.current  ) return;

        timeLine.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
            .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
        timeLine.current.pause();

    }, [])

    useEffect(()=>{
        timeLine.current.play(0)
    },[counter])

    const handleClick = () => {
        setCounter(prevState => Math.min(prevState + 1, maxCount));
    }

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}
