import { createSelector } from 'reselect';

const optionsListSelector = state => state.options.optionsList;
const selectedIdsSelector = state => state.options.selected;

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (optionsList, selectedIds) => optionsList.filter(option => selectedIds.includes(option.id)),
);
export const availableOptionsSelector = state => {
  const { selected, optionsList } = state.options;
  return optionsList.filter(option => !selected.includes(option.id));
};
