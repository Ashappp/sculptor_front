export const changeSelectedData = (event, arr) => {
  return {
    type: 'DATA_SELECTION',
    value: event,
    arr,
  };
};

export const setSelectedDates = taskDates => ({
  type: 'TASK_DATES',
  payload: taskDates,
});

export const clearSelectedData = () => ({
  type: 'CLEAR_SELECTED_DATA',
});

export default { changeSelectedData, setSelectedDates, clearSelectedData };
