/* eslint-disable */
import {
  weekNow,
  weekPrev,
  weekNext,
  weekExented,
  nowMilliseconds,
  oneWeekinMilliseconds,
} from '../../utils/date';
import findActiveTaskOnWeek from '../../utils/findActiveTaskOnWeek';

const initialState = [];
const presentWeek = weekNow();

const initalWeekState = {
  date: new Date().getTime(),
  arrDays: presentWeek.map(el => ({
    data: el,
    tasks: [],
  })),
};

const getDateWithoutTime = time =>
  new Date(new Date(time).setHours(0, 0, 0, 0)).getTime();

export const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GOALS':
      return action.payload;
    case 'SAVE_GOAL':
      return state.map(goal =>
        goal._id === action.updatedGoal.activeGoalID
          ? {
              ...goal,
              ...action.updatedGoal,
            }
          : goal,
      );
    case 'ADD_GOAL':
      return [...state, action.updatedGoal];
    case 'GOALS_CHANGE_ACTIVE_DATES_IN_TASK':
      return state.map(goal => {
        if (goal._id === action.goalId) {
          const goalTasks = goal.goalTasks.map(task => {
            if (task._id === action.taskId) {
              return {
                ...task,
                taskActiveDates: action.selectedData,
              };
            } else {
              return task;
            }
          });
          return {
            ...goal,
            goalTasks,
          };
        } else {
          return goal;
        }
      });
    case 'DELETE_GOAL_TASK_ACTIVE_DAY':
      return state.map(goal => {
        if (goal._id === action.goalId) {
          const goalTasks = goal.goalTasks.map(task => {
            if (task._id === action.taskId) {
              return {
                ...task,
                taskActiveDates: task.taskActiveDates.filter(day => {
                  return day._id !== action.taskActiveDayId;
                }),
              };
            } else {
              return task;
            }
          });
          return {
            ...goal,
            goalTasks,
          };
        } else {
          return goal;
        }
      });
    case 'UPDATE_STATUS_GOAL_TASK_ACTIVE_DAY':
      return state.map(goal => {
        if (goal._id === action.goalId) {
          const goalTasks = goal.goalTasks.map(task => {
            if (task._id === action.taskId) {
              return {
                ...task,
                taskActiveDates: task.taskActiveDates.map(day => {
                  if (day._id === action.taskActiveDayId) {
                    return {
                      ...day,
                      isDone: action.isDone,
                    };
                  } else {
                    return day;
                  }
                }),
              };
            } else {
              return task;
            }
          });
          return {
            ...goal,
            goalTasks,
          };
        } else {
          return goal;
        }
      });
    case 'DELETE_GOAL':
      return state.filter(el => el._id !== action.idGoal);

    case 'SAVE_EDIT_GOAL':
      console.log(action.arrGoals);
      return action.arrGoals;
    default:
      return state;
  }
};

export const taskReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'ONLY_TASKS':
      const tasks = action.payload.tasks.map(el => {
        const color = action.payload.goals.find(elem => elem._id === el.goalId)
          .goalColor;

        return {
          id: el._id,
          title: el.taskTitle,
          isComplete: el.isComplete,
          goalId: el.goalId,
          activeDays: el.taskActiveDates.map(el => ({
            date: new Date(el.date),
            isDone: el.isDone,
            taskActiveDateId: el._id,
          })),
          color,
        };
      });

      return tasks;
    case 'TASKS_CHANGE_ACTIVE_DATES_IN_TASK':
      return store.map(task => {
        if (task.id === action.taskId) {
          return {
            ...task,
            activeDays: action.selectedData.map(el => ({
              ...el,
              taskActiveDateId: el._id,
              date: new Date(el.date),
            })),
          };
        } else {
          return task;
        }
      });
    case 'DELETE_TASK_ACTIVE_DAY':
      return store.map(task => {
        if (task.id === action.taskId) {
          return {
            ...task,
            activeDays: task.activeDays.filter(
              day => day.taskActiveDateId !== action.taskActiveDayId,
            ),
          };
        } else {
          return task;
        }
      });
    case 'UPDATE_STATUS_TASK_ACTIVE_DAY':
      return store.map(task => {
        if (task.id === action.taskId) {
          return {
            ...task,
            activeDays: task.activeDays.map(day => {
              if (day.taskActiveDateId === action.taskActiveDayId) {
                return {
                  ...day,
                  isDone: action.isDone,
                };
              } else {
                return day;
              }
            }),
          };
        } else {
          return task;
        }
      });
    default:
      return store;
  }
};

export const weekTasksReducer = (
  store = initalWeekState,
  { type, payload },
) => {
  switch (type) {
    case 'WEEK_TASKS':
      return {
        date: nowMilliseconds(),
        arrDays: findActiveTaskOnWeek(weekNow, store.date, payload),
      };
    case 'WEEK_TASKS_NEXT':
      return {
        date: store.date + oneWeekinMilliseconds,
        arrDays: findActiveTaskOnWeek(weekNext, store.date, payload),
      };
    case 'WEEK_TASKS_PREV':
      return {
        date: store.date - oneWeekinMilliseconds,
        arrDays: findActiveTaskOnWeek(weekPrev, store.date, payload),
      };
    case 'UPDATE_WEEK_TASKS':
      return {
        date: payload.selectedTime,
        arrDays: findActiveTaskOnWeek(
          weekExented,
          new Date(payload.selectedTime).getTime(),
          payload.tasks,
        ),
      };
    case 'DASHBOARD_DELETE_TASK':
      const newState = store.map(day => {
        if (
          getDateWithoutTime(day.date) === getDateWithoutTime(payload.taskDate)
        ) {
          const newDayTasks = day.tasks;
          return {
            date: day.date,
            tasks: newDayTasks.splice(payload.indx, 1),
          };
        }
        return day;
      });
      return newState;
    default:
      return store;
  }
};
