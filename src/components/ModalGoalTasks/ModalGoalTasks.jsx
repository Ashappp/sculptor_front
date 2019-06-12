/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Task from '../../redux/actions/goalAddTaskActions';
import GoalDataAction from '../../redux/actions/toggleSetEditGoalModalActions';

import ModalGoalWeekSelect from '../ModalGoalWeekSelect/ModalGoalWeekSelect';
import DelBtn from '../Button/DeleteButton/DeleteButton';

import './ModalGoalTasks.css';

const ModalTasks = ({
  inputTaskTitle,
  deleteTask,
  addTask,
  goalTasks,
  editGoal,
  deleteTaskFromEditGoal,
  addTaskInEditGoal,
  onchangeActionInEditFunc,
}) => {
  return (
    <div className="ModalTasks">
      {(editGoal.data.goalTasks || goalTasks).map((task, idx) => (
        <div
          className="ModalTasks__input-container"
          key={task.name || task._id}
        >
          <div className="ModalTasks__input-container--left">
            <input
              className="ModalTasks__input"
              type="text"
              name={task._id || task.name}
              // value={task.taskTitle}
              defaultValue={
                editGoal.modalType === 'SET'
                  ? task.taskTitle
                  : editGoal.data.goalTasks[idx].taskTitle
              }
              placeholder="Enter your task"
              onChange={e => {
                return editGoal.modalType === 'SET'
                  ? inputTaskTitle(e, task.name)
                  : onchangeActionInEditFunc(e, task.name);
              }}
            />
            <DelBtn
              // type="button"
              className="ModalTasks__del-btn"
              onClick={e => {
                if (editGoal.modalType === 'UPDATE') {
                  api.deleteTaskInEditGoal(task._id);
                  deleteTaskFromEditGoal(task._id);
                } else {
                  const id = task.name || task._id;
                  deleteTask(e, id, goalTasks);
                }
              }}
            />
          </div>
          <ModalGoalWeekSelect id={task._id} task={task} />
        </div>
      ))}
      {(editGoal.modalType === 'SET'
        ? goalTasks.length < 5
        : editGoal.data.goalTasks.length < 5) && (
        <button
          type="button"
          onClick={
            editGoal.modalType === 'UPDATE' ? addTaskInEditGoal : addTask
          }
          className="ModalTasks__add-btn"
        >
          <span className="ModalTasks__add-btn--plus">+</span> Add New Task
        </button>
      )}
    </div>
  );
};

ModalTasks.propTypes = {
  goalTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputTaskTitle: PropTypes.func.isRequired,
  onchangeActionInEditFunc: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  editGoal: PropTypes.shape.isRequired,
  deleteTaskFromEditGoal: PropTypes.func.isRequired,
  addTaskInEditGoal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    goalTasks: state.goalData.goalTasks,
    editGoal: state.editGoal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputTaskTitle: (e, name) => dispatch(Task.inputTaskTitle(e, name)),
    onchangeActionInEditFunc: (e, name) =>
      dispatch(Task.onchangeActionInEdit(e, name)),
    deleteTask: (e, name, goalTasks) =>
      dispatch(Task.deleteTask(e, name, goalTasks)),
    addTask: () => dispatch(Task.addTask()),
    deleteTaskFromEditGoal: id =>
      dispatch(GoalDataAction.deleteTaskFromEditGoal(id)),
    addTaskInEditGoal: () => dispatch(GoalDataAction.addTaskInEditGoal()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalTasks);
