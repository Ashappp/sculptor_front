/*eslint-disable*/
function userTaskDate(state = {}, action) {
  switch (action.type) {
    case 'CREATIONDATE':
      const taskId = action.id;
      const allWeeks = [
        {
          date: action.value,
          week: 1,
        },
      ];

      let date = action.value;
      let weekCounter = 1;
      let dayCounter = 1;

      while (dayCounter !== 63) {
        date += 86401000;

        const dateObj = {
          date: date,
          week: weekCounter,
        };

        allWeeks.push(dateObj);

        dayCounter += 1;

        if (dayCounter % 7 === 0) {
          weekCounter += 1;
        }
      }

      const userPickedWeeks = allWeeks.filter(el =>
        action.taskWeeks.includes(el.week),
      );
      const userDisabledWeeks = allWeeks.filter(el =>
        allWeeks.includes(el.week),
      );

      const datesObject = {
        allWeeks,
        userPickedWeeks,
        userDisabledWeeks,
        taskId,
      };

      return datesObject;

    default:
      return state;
  }
}

export default userTaskDate;
