function showPicker(state = { openPickerModal: false }, action) {
  switch (action.type) {
    case 'SHOW_PICKER':
      return {
        ...state,
        openPickerModal: !state.openPickerModal,
        task: action.task,
        goalId: action.goalId,
      };
    case 'CLOSE_PICKER':
      return { openPickerModal: false };
    default:
      return state;
  }
}

export default showPicker;
