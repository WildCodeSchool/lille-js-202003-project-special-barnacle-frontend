import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainers = () => {
  const counter = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  // This container is for testing purpose only.

  return (
    <div>
      <p>{counter}</p>
      <p>This a second container </p>
      <button type="button" onClick={() => dispatch({ type: 'ADD1' })}>
        ADD1
      </button>
      <button type="button" onClick={() => dispatch({ type: 'REMOVE1' })}>
        REMOVE1
      </button>
      <button type="button" onClick={() => dispatch({ type: 'ADD10' })}>
        ADD10
      </button>
      <button type="button" onClick={() => dispatch({ type: 'REMOVE10' })}>
        REMOVE10
      </button>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
        RESET
      </button>
    </div>
  );
};

export default CounterContainers;
