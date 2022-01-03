import {Counter} from "./bases/Counter";
import {CounterBy} from "./bases/CounterBy";
import {CounterEffect} from "./bases/CounterEffect";

function App() {
  return (
    <>
        <h1>Hola mundo</h1>
        <Counter initialValue={15}/>
        <CounterBy />
        <CounterEffect/>
        <CounterEffect/>
        <hr/>
    </>
  );
}

export default App;
