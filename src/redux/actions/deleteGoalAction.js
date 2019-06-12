import api from '../../services/api';

const deleteGoalFromState = idGoal => ({
  type: 'DELETE_GOAL',
  idGoal,
});

const asyncDeleteGoal = goalId => dispatch => {
  api
    .deleteGoalFromDb(goalId)
    .then(data => {
      if (data.data.success) {
        dispatch(deleteGoalFromState(goalId));
      }
    })
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
};

export default {
  asyncDeleteGoal,
};
