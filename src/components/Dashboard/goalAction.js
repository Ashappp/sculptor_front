/* eslint-disable */
import API from '../../services/api';

const fetchGoals = data => ({
  type: 'SET_GOALS',
  payload: data,
});

export const asyncGoalAction = user => dispatch => {
  API.getGoals(user)
    .then(data => dispatch(fetchGoals(data.goals)))
    .catch(error => console.log(error));
};

export const updateGoalTaskActiveDates = ({
  goalId,
  taskId,
  selectedData,
}) => ({
  type: 'GOALS_CHANGE_ACTIVE_DATES_IN_TASK',
  goalId,
  taskId,
  selectedData,
});

export default { asyncGoalAction, updateGoalTaskActiveDates };
