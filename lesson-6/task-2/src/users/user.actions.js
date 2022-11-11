export const INPUT_CHANGE = 'USER/INPUT_CHANGE';

export const inputChange = value => ({
  type: INPUT_CHANGE,
  payload: {
    value,
  },
});
