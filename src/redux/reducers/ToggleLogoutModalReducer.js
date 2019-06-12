function toggleLogoutModal(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_LOGOUT_MODAL':
      return !state;
    default:
      return state;
  }
}

export default toggleLogoutModal;
