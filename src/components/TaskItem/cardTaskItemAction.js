// import {
//   updateTaskActiveDayStatus,
//   deleteTaskActiveDates,
// } from '../Dashboard/taskAction';
// import {
//   updateGoalTaskActiveDayStatus,
//   deleteGoalTaskActiveDay,
// } from '../Dashboard/goalAction';
import api from '../../services/api';

// TODO:
//* ? Action for checking task done
export const changeTaskToDone = ({
  taskId,
  taskActiveDayId,
  isDone,
  goalId,
}) => (dispatch, getState) => {
  api
    .changeStatusOneTaskActiveDate({ taskActiveDayId, isDone, taskId })
    .then(res => {
      if (res) {
        dispatch({
          type: 'UPDATE_STATUS_TASK_ACTIVE_DAY',
          taskId,
          taskActiveDayId,
          isDone,
        });
        dispatch({
          type: 'UPDATE_STATUS_GOAL_TASK_ACTIVE_DAY',
          taskId,
          taskActiveDayId,
          goalId,
          isDone,
        });

        const state = getState();

        dispatch({
          type: 'UPDATE_WEEK_TASKS',
          payload: { selectedTime: state.weekTasks.date, tasks: state.tasks },
        });
      }
    });
};

//* ! Action for delete this task from this day!!!
export const deleteTaskFromThisDay = ({ taskId, taskActiveDayId, goalId }) => (
  dispatch,
  getState,
) => {
  console.log(taskActiveDayId);
  api.deleteOneTaskActiveDate({ taskActiveDayId, taskId }).then(res => {
    if (res) {
      dispatch({
        type: 'DELETE_TASK_ACTIVE_DAY',
        taskId,
        taskActiveDayId,
      });
      dispatch({
        type: 'DELETE_GOAL_TASK_ACTIVE_DAY',
        taskId,
        taskActiveDayId,
        goalId,
      });

      const state = getState();

      dispatch({
        type: 'UPDATE_WEEK_TASKS',
        payload: { selectedTime: state.weekTasks.date, tasks: state.tasks },
      });
    }
  });
};

export default { changeTaskToDone, deleteTaskFromThisDay };
