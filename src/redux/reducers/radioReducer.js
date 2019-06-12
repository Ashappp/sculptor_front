export default function goalColor(state = '', action) {
  // console.log('ss');
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case 'COLORSELECTED':
      const selectedColor = action.target.value;
      return selectedColor;
    case 'CLEAR_COLOR':
      return '';
    case 'ADD_DEFAULT_COLOR':
      return '#dee5e8';
    case 'ADD_GOAL_COLOR':
      return action.color;
    default:
      return state;
  }
}
