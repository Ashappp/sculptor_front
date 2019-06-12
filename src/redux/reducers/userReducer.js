const initialState = {
  userId: null,
  token: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      localStorage.setItem('user', JSON.stringify(action.data));
      return { ...action.data };
    case 'OK_LOGOUT':
      localStorage.clear();
      return { ...state, user: null };
    default:
      return state;
  }
};

export default user;
