/* eslint-disable */

import { updateAllGoalInfoHelper } from '../../utils/updateAllGoalInfo';

const saveGoal = (
  goalTitle,
  goalColor,
  goalTasks,
  goalMotivation,
  goals,
  activeGoalID,
) => dispatch => {
  dispatch({
    type: 'SAVE_GOAL',
    updatedGoal: {
      goalTitle,
      goalColor,
      goalTasks,
      goalMotivation,
      activeGoalID,
    },
    goals,
  });
};

const addGoal = (
  goalTitle,
  goalColor,
  goalTasks,
  goalMotivation,
  goals,
  activeGoalID,
) => ({
  type: 'ADD_GOAL',
  updatedGoal: {
    goalTitle,
    goalColor,
    goalTasks,
    goalMotivation,
    activeGoalID,
  },
});

const saveEditGoal = arrGoals => ({
  type: 'SAVE_EDIT_GOAL',
  arrGoals,
});

const asyncSaveEditGoal = (
  editGoal,
  goalData,
  frozenGoalTasksInEdit,
) => dispatch => {
  updateAllGoalInfoHelper(editGoal, goalData, frozenGoalTasksInEdit)
    .then(data => dispatch(saveEditGoal(data.data.goals)))
    .catch(error => console.log(error));
};

export default {
  saveGoal,
  addGoal,
  asyncSaveEditGoal,
};
