function activeGoalID(state = '', action) {
  switch (action.type) {
    case 'EDIT_GOAL':
      return action.id || state;
    default:
      return state;
  }
}

export default activeGoalID;
