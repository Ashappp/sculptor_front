/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styles from './DatePicker.module.css';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow/baseline-keyboard_backspace-24px.svg';

import weekTasksActions from '../Dashboard/weekAction';

const DatePicker = ({
  weekTasksActionPrev,
  weekTasksActionNext,
  tasks,
  weekTasks,
}) => {
  return (
    <div className={styles.header__date}>
      <nav className={styles.datePicker}>
        <button
          onClick={() => weekTasksActionPrev(tasks)}
          type="submit"
          className={styles.datePicker__arrow}
        >
          <Arrow className={styles.arrow__prev} />
          prev week
        </button>
        <div className={styles.datePicker__dateNow}>
          <p className={styles.dateNow__month}>
            {new Date(weekTasks.date).toLocaleString('en-us', {
              month: 'short',
            })}
          </p>
          <p className={styles.dateNow__day}>
            {new Date(weekTasks.date).getDate()}
          </p>
        </div>
        <button
          onClick={() => weekTasksActionNext(tasks)}
          type="submit"
          className={styles.datePicker__arrow}
        >
          next week
          <Arrow className={styles.arrow__next} />
        </button>
      </nav>
    </div>
  );
};

const mstp = store => ({
  tasks: store.tasks,
  weekTasks: store.weekTasks,
});

const mdtp = dispatch => ({
  weekTasksActionNext: data =>
    dispatch(weekTasksActions.weekTasksActionNext(data)),
  weekTasksActionPrev: data =>
    dispatch(weekTasksActions.weekTasksActionPrev(data)),
});

export default connect(
  mstp,
  mdtp,
)(DatePicker);
