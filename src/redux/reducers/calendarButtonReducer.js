/*eslint-disable*/
function calendarButton(state = false, action) {
  switch (action.type) {
    case 'CALENDAR':
      return !state;
    default:
      return state;
  }
}

export default calendarButton;
