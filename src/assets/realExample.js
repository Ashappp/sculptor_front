/* eslint-disable */

// 1) taskTitle: 'Task title 1', _id: "5cf5209db562b5454fb3bb0c" в const frozenTasks и const goalTasks - полностью одинаковые их игнорировать совсем

/* 2) taskTitle: 'Task title 2', _id: "6cf5309db562b5454fb3bb0c", в const frozenTasks и const goalTasks - изменилось поле taskWeekRange (на первой недели активность стала false) - найти что именно в этом поле произошло изменение и все его вытащить вместе с _id такого таска и потом нужно будет на бэк отправить:

tasks: [
      {
        taskId: '5ce79d26cb0bee0a8089a7d0',
        updateFields: {
          taskWeekRange: [ВЕСЬ МАССИВ ОБНОВЛЕННЫЙ],
          taskTitle: "ЗДЕСЬ ТОЖЕ ПРОВЕРЯТЬ ЕСЛИ ОБНОВИЛОСЬ ТО НА БЭК ОТПРАВЛЯТЬ"
        },
      },
    ],
*/

/* 3) Сравнить const frozenTasks и const goalTasks - найти какие добавились таски и потом нужно будет их на бэк отправить, поэтому сложить их :

newTasks: [
            {
              taskTitle: 'some task title WITH PUT CREATE',
              taskWeekRange: [
              {
          taskTitle: 'Task title 3',
          _id: "897308bd-b352-4d09-b374-8b5817590e6a",
          taskWeekRange: [{
              week: '1',
              status: 'false',
            },
            {
              week: '2',
              status: 'false',
            },
            {
              week: '3',
              status: 'false',
            },
            {
              week: '4',
              status: 'false',
            },
            {
              week: '5',
              status: 'false',
            },
            {
              week: '6',
              status: 'true',
            },
            {
              week: '7',
              status: 'false',
            },
            {
              week: '8',
              status: 'true',
            },
            {
              week: '9',
              status: 'false',
            },
          ],
        },
        {
          taskTitle: 'Task title 4',
          _id: "11633d19-f44c-4df4-8192-db26ee605d2c",
          taskWeekRange: [{
              week: '1',
              status: 'false',
            },
            {
              week: '2',
              status: 'false',
            },
            {
              week: '3',
              status: 'false',
            },
            {
              week: '4',
              status: 'false',
            },
            {
              week: '5',
              status: 'false',
            },
            {
              week: '6',
              status: 'true',
            },
            {
              week: '7',
              status: 'false',
            },
            {
              week: '8',
              status: 'true',
            },
            {
              week: '9',
              status: 'false',
            },
          ],
        },
    ],
*/

const frozenTasks = [
  {
    taskTitle: 'Task title 1',
    _id: '5cf5209db562b5454fb3bb0c',
    taskWeekRange: [
      {
        week: '1',
        status: 'true',
      },
      {
        week: '2',
        status: 'true',
      },
      {
        week: '3',
        status: 'false',
      },
      {
        week: '4',
        status: 'false',
      },
      {
        week: '5',
        status: 'false',
      },
      {
        week: '6',
        status: 'false',
      },
      {
        week: '7',
        status: 'false',
      },
      {
        week: '8',
        status: 'false',
      },
      {
        week: '9',
        status: 'false',
      },
    ],
  },
  {
    taskTitle: 'Task title 2',
    _id: '6cf5309db562b5454fb3bb0c',
    taskWeekRange: [
      {
        week: '1',
        status: 'true',
      },
      {
        week: '2',
        status: 'false',
      },
      {
        week: '3',
        status: 'false',
      },
      {
        week: '4',
        status: 'false',
      },
      {
        week: '5',
        status: 'false',
      },
      {
        week: '6',
        status: 'true',
      },
      {
        week: '7',
        status: 'false',
      },
      {
        week: '8',
        status: 'true',
      },
      {
        week: '9',
        status: 'false',
      },
    ],
  },
];

const goalTasks = [
  {
    taskTitle: 'Task title 1',
    _id: '5cf5209db562b5454fb3bb0c',
    taskWeekRange: [
      {
        week: '1',
        status: 'true',
      },
      {
        week: '2',
        status: 'true',
      },
      {
        week: '3',
        status: 'false',
      },
      {
        week: '4',
        status: 'false',
      },
      {
        week: '5',
        status: 'false',
      },
      {
        week: '6',
        status: 'false',
      },
      {
        week: '7',
        status: 'false',
      },
      {
        week: '8',
        status: 'false',
      },
      {
        week: '9',
        status: 'false',
      },
    ],
  },
  {
    taskTitle: 'Task title 2',
    _id: '6cf5309db562b5454fb3bb0c',
    taskWeekRange: [
      {
        week: '1',
        status: 'false',
      },
      {
        week: '2',
        status: 'false',
      },
      {
        week: '3',
        status: 'false',
      },
      {
        week: '4',
        status: 'false',
      },
      {
        week: '5',
        status: 'false',
      },
      {
        week: '6',
        status: 'true',
      },
      {
        week: '7',
        status: 'false',
      },
      {
        week: '8',
        status: 'true',
      },
      {
        week: '9',
        status: 'false',
      },
    ],
  },
  {
    taskTitle: 'Task title 3',
    _id: '897308bd-b352-4d09-b374-8b5817590e6a',
    taskWeekRange: [
      {
        week: '1',
        status: 'false',
      },
      {
        week: '2',
        status: 'false',
      },
      {
        week: '3',
        status: 'false',
      },
      {
        week: '4',
        status: 'false',
      },
      {
        week: '5',
        status: 'false',
      },
      {
        week: '6',
        status: 'true',
      },
      {
        week: '7',
        status: 'false',
      },
      {
        week: '8',
        status: 'true',
      },
      {
        week: '9',
        status: 'false',
      },
    ],
  },
  {
    taskTitle: 'Task title 4',
    _id: '11633d19-f44c-4df4-8192-db26ee605d2c',
    taskWeekRange: [
      {
        week: '1',
        status: 'false',
      },
      {
        week: '2',
        status: 'false',
      },
      {
        week: '3',
        status: 'false',
      },
      {
        week: '4',
        status: 'false',
      },
      {
        week: '5',
        status: 'false',
      },
      {
        week: '6',
        status: 'true',
      },
      {
        week: '7',
        status: 'false',
      },
      {
        week: '8',
        status: 'true',
      },
      {
        week: '9',
        status: 'false',
      },
    ],
  },
];

const onlyOldTasks = [];
const onlyNewTasks = [...goalTasks];

for (let oldTask of frozenTasks) {
  onlyNewTasks.map((task, index) => {
    if (task._id === oldTask._id) {
      const splicedElement = onlyNewTasks.splice(index, 1);
      onlyOldTasks.push(splicedElement[0]);
    }
    return onlyNewTasks;
  });
}

const updateTasks = frozenTasks.filter(frozenItem => {
  for (el of onlyOldTasks) {
    console.log('title ', frozenItem.taskTitle === el.taskTitle);
    console.log('weekRange ', frozenItem.taskWeekRange === el.taskWeekRange);
    return (
      frozenItem.taskTitle !== el.taskTitle ||
      frozenItem.taskWeekRange.forEach(
        (week, indx) => week.status !== el.taskWeekRange[indx].status,
      )
    );
  }
});

console.log('updateTasks :', updateTasks);

console.log('onlyOldTasks: ', onlyOldTasks);
console.log('onlyNewTasks: ', onlyNewTasks);
