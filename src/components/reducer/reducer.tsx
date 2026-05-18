import { useReducer } from 'react';
import { initialState, counterReducer } from './type';

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Status: {state.status}</h2>

      <div className="my-3">
        <div className="space-x-1">
          <button
            onClick={() => dispatch({ type: 'increment' })}
            className="btn"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'decrement' })}
            className="btn"
          >
            Decrement
          </button>
          <button onClick={() => dispatch({ type: 'reset' })} className="btn">
            Reset
          </button>
        </div>
      </div>
      <div className="space-x-1">
        <button
          onClick={() => dispatch({ type: 'setStatus', payload: 'active' })}
          className="btn"
        >
          Set Status to Active
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: 'setStatus', payload: 'inactive' })}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
