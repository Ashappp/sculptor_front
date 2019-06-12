/* eslint-disable */

export const frozenGoalTasksInEditAction = arrTasks => ({
  type: 'SAVE_GOAL_TASKS_IN_EDIT',
  arrTasks,
});

export const deleteFrozenGoalTasksInEditAction = () => ({
  type: 'DELETE_SAVE_GOAL_TASKS_IN_EDIT',
});
