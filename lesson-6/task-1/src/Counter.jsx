import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({ value, increment, decrement, reset }) => (
  <div className="counter">
    <button onClick={decrement} className="counter__button">
      -
    </button>
    <span onClick={reset} className="counter__value">
      {value}
    </span>
    <button onClick={increment} className="counter__button">
      +
    </button>
  </div>
);

const mapState = state => ({
  value: state,
});
const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

export default connect(mapState, mapDispatch)(Counter);
