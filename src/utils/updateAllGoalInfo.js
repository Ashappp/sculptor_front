/* eslint-disable */
import api from '../services/api';
// функцию запустить с goalId, updateObject и обработать результат

export const updateAllGoalInfoHelper = (
  editGoal,
  goalData,
  frozenGoalTasksInEdit,
) => {
  const goalID = editGoal.data._id; //for api request
  const frozenTasks = [...frozenGoalTasksInEdit];

  const onlyOldTasks = [];
  const onlyNewTasks = [...editGoal.data.goalTasks];

  for (let oldTask of frozenTasks) {
    onlyNewTasks.map((task, index) => {
      if (task._id === oldTask._id) {
        const splicedElement = onlyNewTasks.splice(index, 1);
        onlyOldTasks.push(splicedElement[0]);
      }
      return onlyNewTasks;
    });
  }

  const onlyUpdateTasks = onlyOldTasks.filter(frozenItem => {
    for (let el of frozenTasks) {
      const changeWeekStatus = frozenItem.taskWeekRange.filter((week, indx) => {
        // console.log(
        //   'el.taskWeekRange[indx].status :',
        //   el.taskWeekRange[indx].status,
        // );
        // console.log('week :', week);
        // console.log('indx :', indx);
        return week.status !== el.taskWeekRange[indx].status;
      });
      // console.log(changeWeekStatus);
      if (frozenItem.taskTitle !== el.taskTitle || changeWeekStatus) {
        console.log('true');
        return true;
      } else {
        console.log('false');
        return false;
      }
    }
  });

  const updateObject = {
    goalFieldsUpdate: {
      goalTitle:
        editGoal.data.goalTitle === goalData.goalTitle
          ? editGoal.data.goalTitle
          : goalData.goalTitle,
      goalMotivation:
        editGoal.data.goalMotivation === goalData.goalMotivation
          ? editGoal.data.goalMotivation
          : goalData.goalMotivation,
      goalColor:
        editGoal.data.goalColor === goalData.goalColor
          ? editGoal.data.goalColor
          : goalData.goalColor,
    },
    tasks: onlyUpdateTasks.map(el => ({
      taskId: el._id,
      updateFields: {
        taskTitle: el.taskTitle,
        taskWeekRange: el.taskWeekRange,
      },
    })),
    newTasks: onlyNewTasks.map(newTask => ({
      goalId: goalID,
      taskTitle: newTask.taskTitle,
      taskWeekRange: newTask.taskWeekRange,
    })),
  };
  console.log('updateObject', updateObject);
  return api.updateAllGoalInfo(goalID, updateObject);
};

// пример того что отправить на бэкенд:
// {
//   "goalFieldsUpdate": {
//     "goalTitle": "CHANGED WITH PUT REQEUST",
//     "goalMotivation": "CHANGED WITH PUT REQEUST MOTIVATION"
//   },
//   "tasks": [{
//     "taskId": "5ce79d26cb0bee0a8089a7d0",
//     "updateFields": {
//       "taskTitle": "CHANGE WITH PUT"
//     }
//   }],
//   "newTasks": [{
//     "goalId": "some goalId",
//     "taskTitle": "some task title WITH PUT CREATE",
//     "taskWeekRange": [{
//         "week": "1",
//         "status": "true"
//       },
//       {
//         "week": "2",
//         "status": "true"
//       },
//       {
//         "week": "3",
//         "status": "false"
//       },
//       {
//         "week": "4",
//         "status": "false"
//       },
//       {
//         "week": "5",
//         "status": "false"
//       },
//       {
//         "week": "6",
//         "status": "false"
//       },
//       {
//         "week": "7",
//         "status": "false"
//       },
//       {
//         "week": "8",
//         "status": "false"
//       },
//       {
//         "week": "9",
//         "status": "false"
//       }
//     ]
//   }]
// }
