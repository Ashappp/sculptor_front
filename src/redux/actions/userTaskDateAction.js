/*eslint-disable*/

const userTaskDate = (e, taskCreationDate, taskWeeks) => ({
  type: 'CREATIONDATE',
  value: taskCreationDate,
  weeks: taskWeeks,
  id: e.target.dataset.id,
});

export default userTaskDate;
