/* eslint-disable no-underscore-dangle */
function goalMotivation(state = '', action) {
  switch (action.type) {
    case 'INPUT_GOAL_MOTIVATION':
      if (!action.goals) {
        return action.value;
      }
      return action.goalMotivation;
    case 'SAVE_GOAL':
      return '';
    case 'ADD_GOAL':
      return '';
    case 'INPUT_MOTIVATION_CLEAR':
      return '';
    case 'INPUT_MOTIVATION_IN_EDIT':
      return action.motivation;
    default:
      return state;
  }
}

export default goalMotivation;
