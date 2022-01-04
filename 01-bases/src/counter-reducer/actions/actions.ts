
export type CurrentAction =
    | { type: "increaseBy", payload: { value: number, } }
    | { type: "reset"}


export const doReset = ():CurrentAction=>({type: 'reset'})
export const doIncreaseBy = (value:number):CurrentAction=>({type: 'increaseBy', payload: {value}})
