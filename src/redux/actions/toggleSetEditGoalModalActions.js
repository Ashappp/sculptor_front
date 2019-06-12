/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
const closeSetEditGoalModal = e => ({
  type: 'EDIT_GOAL_CANCEL',
  id: e.target.dataset.id,
});

const closeEditGoalModal = () => ({
  type: 'CLOSE_EDIT_GOAL',
});

const openSetEditGoalModal = (e, data, modalType) => ({
  type: 'EDIT_GOAL',
  id: e.target.dataset.id,
  data,
  modalType,
});

const deleteTaskFromEditGoal = id => ({
  type: 'DELETE_TASK_FROM_EDIT_GOAL',
  id,
});

const addTaskInEditGoal = () => ({
  type: 'ADD_TASK_IN_EDIT_GOAL',
});

export default {
  closeSetEditGoalModal,
  openSetEditGoalModal,
  deleteTaskFromEditGoal,
  addTaskInEditGoal,
  closeEditGoalModal,
};
