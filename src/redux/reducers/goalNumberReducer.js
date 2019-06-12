/* eslint-disable no-underscore-dangle */
function goalNumber(state = 1, action) {
  switch (action.type) {
    case 'SAVE_GOAL':
      return state;
    case 'ADD_GOAL':
      return state + 1;
    default:
      return state;
  }
}

export default goalNumber;
