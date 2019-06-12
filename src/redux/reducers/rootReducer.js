/*eslint-disable*/
import { combineReducers } from 'redux';
import selectedData from '../reducers/selectedDataReducer';
import userTaskDate from '../reducers/userTaskDateReducer';
import calendarButton from '../reducers/calendarButtonReducer';
import userReducer from './userReducer';
import app from './appReducer';
import {
  goalsReducer,
  taskReducer,
  weekTasksReducer,
} from '../../components/Dashboard/reducerDashboard';
import logout from './ModalLogoutReducer';
import isLogoutModalOpen from './ToggleLogoutModalReducer';
import editGoal from './goalEditModeReducer';
import goalData from './goalReducer';
import showPicker from './showPickerReducer';
import frozenGoalTasksInEdit from './frozenGoalTasksInEditReducer';

// import goals from './initData';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
  user: userReducer,
  goals: goalsReducer,
  tasks: taskReducer,
  weekTasks: weekTasksReducer,
  app,
  goalData,
  editGoal,
  taskArray: dateReducer,
  selectedData,
  userTaskDate,
  calendarButton,
  logout,
  isLogoutModalOpen,
  showPicker,
  frozenGoalTasksInEdit,
});

export default rootReducer;
