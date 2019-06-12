// eslint-disable-next-line import/prefer-default-export
export const radioAction = e => ({
  type: 'COLORSELECTED',
  target: e.target,
});

export const radioActionClearColor = () => ({
  type: 'CLEAR_COLOR',
});

export const addDefaultColor = () => ({
  type: 'ADD_DEFAULT_COLOR',
});

export const addGoalColor = color => ({
  type: 'ADD_GOAL_COLOR',
  color,
});
