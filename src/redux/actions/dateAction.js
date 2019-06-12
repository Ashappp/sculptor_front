/*eslint-disable*/
const dateAction = event => ({
  type: 'DATE',
  dateObj: event.target.dataset.date,
});

export default dateAction;
