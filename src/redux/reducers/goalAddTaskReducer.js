/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
/* eslint-disable */
import uuid from 'uuid/v4';

const initialTaskWeekRange = [
  {
    week: 1,
    status: false,
  },
  {
    week: 2,
    status: false,
  },
  {
    week: 3,
    status: false,
  },
  {
    week: 4,
    status: false,
  },
  {
    week: 5,
    status: false,
  },
  {
    week: 6,
    status: false,
  },
  {
    week: 7,
    status: false,
  },
  {
    week: 8,
    status: false,
  },
  {
    week: 9,
    status: false,
  },
];

const initialTask = {
  taskTitle: '',
  name: String(Date.now()),
  _id: uuid(),
  taskWeekRange: initialTaskWeekRange,
};

const goalTasks = [
  {
    ...initialTask,
  },
];

function goalTasksFunc(state = goalTasks, action) {
  switch (action.type) {
    case 'INPUT_TASK_TITLE':
      return state.map(task => {
        return action.name === task._id || action.name === task.name
          ? {
              ...task,
              taskTitle: action.value,
            }
          : task;
      });
    case 'DELETE_TASK':
      if (state.length === 1) {
        return goalTasks;
      }

      if (action.name.length === 13) {
        // the length of Date.now (means theese elements haven't been sent to DB yet, so they don't have _id)
        return action.goalTasks.filter(task => action.name !== task.name);
      }

      return action.goalTasks.filter(task => task._id !== action.name);
    case 'ADD_TASK':
      return [
        ...state,
        {
          taskTitle: '',
          _id: uuid(),
          name: String(Date.now()),
          taskWeekRange: [
            {
              week: 1,
              status: false,
            },
            {
              week: 2,
              status: false,
            },
            {
              week: 3,
              status: false,
            },
            {
              week: 4,
              status: false,
            },
            {
              week: 5,
              status: false,
            },
            {
              week: 6,
              status: false,
            },
            {
              week: 7,
              status: false,
            },
            {
              week: 8,
              status: false,
            },
            {
              week: 9,
              status: false,
            },
          ],
        },
      ];
    case 'SAVE_GOAL':
      return goalTasks;
    case 'ADD_GOAL':
      return goalTasks;
    case 'WEEK_SELECTED':
      const targetTask = state.find(el => {
        return el._id === action.id || el.name === action.id;
      });
      targetTask.taskWeekRange[action.name].status = action.checked;
      return state.map(el => (el.id === action.id ? targetTask : el));
    case 'INPUT_TASK_TITLE_CLEAR':
      return [
        {
          taskTitle: '',
          _id: uuid(),
          name: String(Date.now()),
          taskWeekRange: [
            {
              week: 1,
              status: false,
            },
            {
              week: 2,
              status: false,
            },
            {
              week: 3,
              status: false,
            },
            {
              week: 4,
              status: false,
            },
            {
              week: 5,
              status: false,
            },
            {
              week: 6,
              status: false,
            },
            {
              week: 7,
              status: false,
            },
            {
              week: 8,
              status: false,
            },
            {
              week: 9,
              status: false,
            },
          ],
        },
      ];
    case 'ADD_TASKS_WHEN_EDIT_MODE':
      return action.arrTasks;
    default:
      return state;
  }
}

export default goalTasksFunc;
