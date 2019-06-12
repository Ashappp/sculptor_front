const inputMotivation = e => ({
  type: 'INPUT_GOAL_MOTIVATION',
  value: e.target.value,
});

const inputMotivationClear = () => ({
  type: 'INPUT_MOTIVATION_CLEAR',
});

const inputMotivationInEdit = motivation => ({
  type: 'INPUT_MOTIVATION_IN_EDIT',
  motivation,
});

export default {
  inputMotivation,
  inputMotivationClear,
  inputMotivationInEdit,
};
