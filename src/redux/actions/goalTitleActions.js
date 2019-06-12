const inputGoalTitle = e => ({
  type: 'INPUT_GOAL_TITLE',
  value: e.target.value,
});

const inputGoalTitleClear = () => ({
  type: 'INPUT_GOAL_TITLE_CLEAR',
});

const inputGoalTitleInEdit = title => ({
  type: 'INPUT_GOAL_TITLE_IN_EDIT',
  title,
});

export default {
  inputGoalTitle,
  inputGoalTitleClear,
  inputGoalTitleInEdit,
};
