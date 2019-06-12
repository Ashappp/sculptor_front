/* eslint-disable no-param-reassign */
import api from '../../services/api';
import { updateTaskActiveDates } from '../Dashboard/taskAction';
import { updateGoalTaskActiveDates } from '../Dashboard/goalAction';

export const changeActiveDatesInTask = ({
  taskId,
  selectedData,
  goalId,
}) => dispatch => {
  api
    .updateTaskActiveDates({ taskId, taskActiveDates: selectedData })
    .then(res => {
      if (res) {
        selectedData = res.data.taskActiveDates;
        dispatch(updateGoalTaskActiveDates({ taskId, selectedData, goalId }));
        dispatch(updateTaskActiveDates({ taskId, selectedData }));
      }
    });
};

export default { changeActiveDatesInTask };
