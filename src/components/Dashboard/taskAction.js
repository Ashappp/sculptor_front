/* eslint-disable */
import api from '../../services/api';
import { updateWeekTasks, weekTasksAction } from './weekAction';

const getTasks = data => ({
  type: 'ONLY_TASKS',
  payload: data,
});

export const asyncTasksAction = ({ userId, token }) => (dispatch, getState) => {
  api
    .getGoals({
      userId,
      token,
    })
    .then(data => {
      dispatch(getTasks(data));
      const state = getState();
      dispatch(weekTasksAction(state.tasks));
    })
    .catch(error => console.log(error));
};

export const updateTaskActiveDates = ({ taskId, selectedData }) => (
  dispatch,
  getState,
) => {
  dispatch({
    type: 'TASKS_CHANGE_ACTIVE_DATES_IN_TASK',
    taskId,
    selectedData,
  });
  const state = getState();
  dispatch(
    updateWeekTasks({ selectedTime: state.weekTasks.date, tasks: state.tasks }),
  );
};

export default { asyncTasksAction, updateTaskActiveDates };
