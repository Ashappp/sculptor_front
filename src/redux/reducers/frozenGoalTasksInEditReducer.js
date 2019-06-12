function frozenGoalTasksInEdit(state = [], action) {
  switch (action.type) {
    case 'SAVE_GOAL_TASKS_IN_EDIT':
      return action.arrTasks;
    case 'DELETE_SAVE_GOAL_TASKS_IN_EDIT':
      return [];
    default:
      return state;
  }
}

export default frozenGoalTasksInEdit;
