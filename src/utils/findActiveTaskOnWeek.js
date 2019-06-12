/* eslint-disable */

const getDateWithoutTime = time =>
  new Date(new Date(time).setHours(0, 0, 0, 0)).getTime();

export default function findActiveTaskOnWeek(arrDate, date, payload) {
  const weeksMilliseconds = arrDate(date).map(el =>
    getDateWithoutTime(new Date(el).getTime()),
  );
  const allTasks = [...payload];
  const activeTasksDataPrev = arrDate(date).map(el => ({
    data: el,
    tasks: [],
  }));
  const activeTasks = [];
  allTasks.forEach(task => {
    if (task.activeDays) {
      return task.activeDays.map(el =>
        activeTasks.push({
          taskId: task.id,
          color: task.color,
          goalId: task.goalId,
          isComplete: task.isComplete,
          title: task.title,
          date: el.date,
          isDone: el.isDone,
          taskActiveDateId: el.taskActiveDateId,
        }),
      );
    }
  });

  activeTasks.forEach(el => {
    const index = weeksMilliseconds.indexOf(
      getDateWithoutTime(new Date(el.date).getTime()),
    );
    if (index !== -1) {
      activeTasksDataPrev[index].tasks.push(el);
    }
  });

  return activeTasksDataPrev;
}
