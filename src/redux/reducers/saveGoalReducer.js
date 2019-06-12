function goals(state = [], action) {
  switch (action.type) {
    case 'SAVE_GOAL':
      return [...state, action.updatedGoal];
    default:
      return state;
  }
}

export default goals;
