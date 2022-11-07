export const INCREMENT = 'COUNER/INCREMENT';
export const DECREMENT = 'COUNER/DECREMENT';
export const RESET = 'COUNER/RESET';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const reset = () => ({
  type: RESET,
});
