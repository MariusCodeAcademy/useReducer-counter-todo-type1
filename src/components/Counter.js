// imports
import css from './Counter.module.css';
import { useReducer, useState } from 'react';

const initCounterValues = { counterValue: 0 };

// funkcija kurios pagalba atnaujinsim state
function counterReducer(state, action) {
  console.log('counterReducer fired. action is: ', action);

  switch (action.type) {
    case 'daugiau':
      return { counterValue: state.counterValue + 1 };
    case 'maziau':
      return { counterValue: state.counterValue - 1 };
    default:
      console.log('type not found');
      return state;
  }
}

function Counter(props) {
  // Logic
  // const [counterValue, setCounterValue] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initCounterValues);

  const handleIncrement = () => {
    // setCounterValue(counterValue + 1);
    dispatch({ type: 'daugiau' });
  };

  const handleDecrement = () => {
    // neleisti eiti zemiau nulio
    if (state.counterValue <= 0) return;
    // setCounterValue(counterValue - 1);
    dispatch({ type: 'maziau' });
  };

  // jsx
  return (
    <div className={css.counter}>
      <h3>{props.children}</h3>
      <h2>{state.counterValue}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
export default Counter;
