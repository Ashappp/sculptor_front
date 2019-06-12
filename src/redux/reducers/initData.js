/* eslint-disable no-underscore-dangle */
// import data from '../../data';

function initData(state = [], { type, payload, updatedGoal }) {
  switch (type) {
    case 'SET_GOALS':
      return payload.data;
    case 'SAVE_GOAL':
      return state.map(goal =>
        goal._id === updatedGoal.activeGoalID
          ? {
              ...goal,
              ...updatedGoal,
            }
          : goal,
      );
    case 'ADD_GOAL':
      return [...state, updatedGoal];
    default:
      return state;
  }
}

export default initData;
