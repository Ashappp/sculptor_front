/*eslint-disable*/
const diffDate = (firstDate, secondDate) => {};

function selectedData(state = [], action) {
  switch (action.type) {
    case 'DATA_SELECTION':
      if (action.arr.includes(String(action.value))) {
        const filtered = action.arr.filter(el => el !== String(action.value));
        return (state = filtered);
      }
      return [...state, String(action.value)];
    case 'TASK_DATES':
      return [...state, ...action.payload];
    case 'CLEAR_SELECTED_DATA':
      return [];
    default:
      return state;
  }
}

export default selectedData;
