// imports
import css from './Counter.module.css';
import { useState } from 'react';

function Counter(props) {
  // Logic
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    // neleisti eiti zemiau nulio
  };

  // jsx
  return (
    <div className={css.counter}>
      <h3>{props.children}</h3>
      <h2>{counterValue}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
    </div>
  );
}
export default Counter;
