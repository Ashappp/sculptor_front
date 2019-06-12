const aktivData = (taskId, data) => ({
  type: 'UPDATE_WEEK_DAYS',
  taskId,
  data,
});

const AsyncEditWeekDays = (taskId, data) => dispatch => {
  dispatch(aktivData(taskId, data));
};

export default AsyncEditWeekDays;
