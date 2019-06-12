/* eslint-disable */

const arr1 = [
  {
    id: 1,
    title: 'qwe',
  },
  {
    id: 2,
    title: 'qwer',
  },
];

const arr2 = [
  {
    id: 1,
    title: 'qwe',
  },
  {
    id: 2,
    title: 'qwer',
  },
  {
    id: 3,
    title: 'qwert',
    h: 2,
  },
  {
    id: 4,
    title: 'qwerty',
  },
];

const onlyOldTasks = [];
const onlyNewTasks = [...arr2];

for (let oldTask of arr1) {
  onlyNewTasks.map((task, index) => {
    if (task.id === oldTask.id) {
      const splicedElement = onlyNewTasks.splice(index, 1);
      console.log('splicedElement', splicedElement);
      onlyOldTasks.push(splicedElement[0]);
    }
    return onlyNewTasks;
  });
}

console.log('onlyOldTasks: ', onlyOldTasks);
console.log('onlyNewTasks: ', onlyNewTasks);

// const newGoalArr = [];
// const oldGoalArr = [];

// for (el of arr2) {
//   for (item of arr1) {
//     if (el.id === item.id) {
//       oldGoalArr.push(el);
//     }

//     if (el.id !== item.id) {
//       if (newGoalArr.includes(el)) {
//         console.log('el.id :', el.id);
//         console.log('item.id :', item.id);
//         console.log('includes');
//         break;
//       } else {
//         console.log('el.id :', el.id);
//         console.log('item.id :', item.id);
//         console.log('not includes');
//         newGoalArr.push(el);
//       }
//     } else {
//       break;
//     }
//   }
// }
// console.log('newGoalArr :', newGoalArr);
// console.log('oldGoalArr :', oldGoalArr);

// const oldGoalArr = arr1.map(el => arr2.find(obj => obj.id === el.id));
// console.log('oldGoalArr :', oldGoalArr);
