export const TOOGGLE_OPTIONS = 'OPTIONS/TOOGLE_OPTIONS';

export const tooggleOption = id => ({
  type: TOOGGLE_OPTIONS,
  payload: {
    id,
  },
});
