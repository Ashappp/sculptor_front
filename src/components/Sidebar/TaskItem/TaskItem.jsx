/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import Picker from '../../Picker/Picker';
import { startOfWeek } from 'date-fns';
import { th } from 'date-fns/esm/locale';
import Backdrop from '../../Backdrop/Backdrop';

import { showPickerModal } from '../../../redux/actions/showPickerAction';

import s from './TaskItem.module.css';

const TaskItem = ({ task, showPiker, showPickerModal, goalId }) => {
  const handleShowPicker = event => {
    showPickerModal(task, goalId);
  };

  return (
    <li className={s.Item} onClick={handleShowPicker}>
      <p className={s.TaskText} data-date={task._id}>
        {task.taskTitle}
      </p>
    </li>
  );
};

function mstp(state) {
  return {
    showPiker: state.showPicker,
  };
}

function mdtp(dispatch) {
  return {
    showPickerModal: (task, goalId) => dispatch(showPickerModal(task, goalId)),
  };
}

export default connect(
  mstp,
  mdtp,
)(TaskItem);
