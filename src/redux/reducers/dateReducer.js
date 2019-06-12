/*eslint-disable*/
function dateReducer(state = '', action) {
  switch (action.type) {
    case 'DATE':
      return !state ? action.dateObj : '';
    default:
      return state;
  }
}
export default dateReducer;
