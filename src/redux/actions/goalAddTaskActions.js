const inputTaskTitle = (e, name) => ({
  type: 'INPUT_TASK_TITLE',
  value: e.target.value,
  name,
});

const deleteTask = (e, name, goalTasks) => ({
  type: 'DELETE_TASK',
  name,
  goalTasks,
});

const addTask = () => ({
  type: 'ADD_TASK',
});

const inputTaskTitleClear = () => ({
  type: 'INPUT_TASK_TITLE_CLEAR',
});

const addTasksWhenEditMode = arrTasks => ({
  type: 'ADD_TASKS_WHEN_EDIT_MODE',
  arrTasks,
});

const onchangeActionInEdit = (e, name) => ({
  type: 'INPUT_TASK_TITLE_CHANGE_IN_EDIT',
  value: e.target.value,
  taskId: e.target.name,
  name,
});

export default {
  inputTaskTitle,
  deleteTask,
  addTask,
  inputTaskTitleClear,
  addTasksWhenEditMode,
  onchangeActionInEdit,
};
