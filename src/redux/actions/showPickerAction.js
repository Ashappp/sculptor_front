export const showPickerModal = (task, goalId) => ({
  type: 'SHOW_PICKER',
  task,
  goalId,
});

export const closePickerModal = () => ({
  type: 'CLOSE_PICKER',
});

export default { showPickerModal, closePickerModal };
