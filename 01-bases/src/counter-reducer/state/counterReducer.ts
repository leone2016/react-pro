import {CounterState} from "../interfaces/interfaces";
import {CurrentAction} from "../actions/actions";

export const counterReducer = (state: CounterState, action: CurrentAction): CounterState => {
    switch (action.type) {

        case 'reset':{
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        }
        case 'increaseBy':{
            return {
                changes: state.changes+1,
                counter: state.counter+action.payload.value,
                previous: state.counter
            }
        }
        default:
            return state;
    }
}
