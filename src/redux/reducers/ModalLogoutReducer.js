function logout(state = false, action) {
  switch (action.type) {
    case 'CANCEL_LOGOUT':
      return false;
    case 'OK_LOGOUT':
      return true;
    default:
      return state;
  }
}

export default logout;
