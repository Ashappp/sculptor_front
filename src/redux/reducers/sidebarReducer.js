/*eslint-disable*/
function showSidebar(state = false, action) {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return !state;
    default:
      return state;
  }
}

export default showSidebar;
