/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SetGoalModal.module.css';
import ModalGoalTitle from '../ModalGoalTitle/ModalGoalTitle';
// import ModalGoalIconSelect from '../ModalGoalIconSelect/ModalGoalIconSelect';
import ModalGoalTasks from '../ModalGoalTasks/ModalGoalTasks';
import ModalGoalMotivation from '../ModalGoalMotivation/ModalGoalMotivation';
import deleteGoalAction from '../../redux/actions/deleteGoalAction';

import saveGoalActions from '../../redux/actions/saveGoalActions';
import GoalActions from '../../redux/actions/saveGoalActions';
import toggleSetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';
import ModalGoalIconSelect from '../ModalGoalIconSelect/ModalGoalIconSelect';

import goalMotivationActions from '../../redux/actions/goalMotivationActions';
import goalTitleActions from '../../redux/actions/goalTitleActions';
import goalAddTaskActions from '../../redux/actions/goalAddTaskActions';
import { radioActionClearColor } from '../../redux/actions/radioAction';
import { deleteFrozenGoalTasksInEditAction } from '../../redux/actions/frozenGoalTasksInEditAction';

import api from '../../services/api';

class SetGoalModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleAddGoal = ({
    goalTitle,
    goalColor,
    goalTasks,
    goalMotivation,
    user,
  }) => {
    const { addGoal, goals } = this.props;
    const newData = {
      goalTitle,
      goalColor,
      goalNumber: goals.length + 1,
      goalTasks: goalTasks.map(task => ({
        taskTitle: task.taskTitle,
        taskWeekRange: task.taskWeekRange,
      })),
      goalMotivation,
      userId: user.userId,
    };

    api.newGoal({ data: newData, token: user.token }).then(data => {
      if (data.success) {
        return addGoal(
          data.goals.goalTitle,
          data.goals.goalColor,
          data.goals.goalTasks,
          data.goals.goalMotivation,
        );
      }
      return null;
    });
  };

  deleteGoalFunc = () => {
    const {
      activeGoalID,
      deleteGoal,
      closeModal,
      inputMotivationClear,
      inputGoalTitleClear,
      inputTaskTitleClear,
      clearColor,
      deleteFrozenGoalTasksInEditActionFunc,
    } = this.props;
    deleteGoal(activeGoalID);
    inputMotivationClear();
    inputGoalTitleClear();
    inputTaskTitleClear();
    clearColor();
    deleteFrozenGoalTasksInEditActionFunc();
    closeModal();
  };

  handleOnClickInEdit = () => {
    const {
      editGoal,
      goalData,
      frozenGoalTasksInEdit,
      asyncSaveEditGoalFunc,
      closeModal,
      inputMotivationClear,
      inputGoalTitleClear,
      inputTaskTitleClear,
      clearColor,
      deleteFrozenGoalTasksInEditActionFunc,
    } = this.props;
    asyncSaveEditGoalFunc(editGoal, goalData, frozenGoalTasksInEdit);
    inputMotivationClear();
    inputGoalTitleClear();
    inputTaskTitleClear();
    clearColor();
    deleteFrozenGoalTasksInEditActionFunc();
    closeModal();
  };

  render() {
    const {
      saveGoal,
      goalTitle,
      goalColor = 'a',
      goals,
      goalMotivation,
      goalTasks,
      activeGoalID,
      modalType,
      user,
    } = this.props;

    return (
      <div className={styles.SetGoalModal} onClick={e => e.stopPropagation()}>
        <h3 className={styles.SetGoalModal__title}>
          {modalType === 'SET' ? 'Set' : 'Update'} a Goal
        </h3>
        <ModalGoalTitle />
        <ModalGoalIconSelect />
        <ModalGoalTasks />
        <ModalGoalMotivation />

        <button
          type="button"
          onClick={() =>
            modalType !== 'SET'
              ? this.handleOnClickInEdit()
              : this.handleAddGoal({
                  goalTitle,
                  goalColor,
                  goalTasks,
                  goalMotivation,
                  activeGoalID,
                  user,
                })
          }
          disabled={
            modalType === 'SET' ? !goalTitle.length || !goalColor.length : false
          }
        >
          {modalType === 'SET' ? 'Create' : 'Save'}
        </button>
        {modalType === 'SET' ? null : (
          <button type="button" onClick={this.deleteGoalFunc}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

SetGoalModal.propTypes = {
  goalTitle: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
  saveGoal: PropTypes.func.isRequired,
  addGoal: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  goalColor: PropTypes.string.isRequired,
  goalMotivation: PropTypes.string,
  goalTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGoalID: PropTypes.string.isRequired,
  user: PropTypes.shape.isRequired,
  editGoal: PropTypes.object.isRequired,
  goalData: PropTypes.object.isRequired,
  frozenGoalTasksInEdit: PropTypes.array.isRequired,
  asyncSaveEditGoalFunc: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

SetGoalModal.defaultProps = {
  goalMotivation: '',
};

function mapStateToProps(state) {
  return {
    goals: state.goals,
    goalTitle: state.goalData.goalTitle,
    goalColor: state.goalData.goalColor,
    goalMotivation: state.goalData.goalMotivation,
    goalTasks: state.goalData.goalTasks,
    activeGoalID: state.goalData.activeGoalID,
    user: state.user,
    editGoal: state.editGoal,
    goalData: state.goalData,
    frozenGoalTasksInEdit: state.frozenGoalTasksInEdit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveGoal: (
      goalTitle,
      goalColor,
      goalTasks,
      goalMotivation,
      goals,
      activeGoalID,
    ) =>
      dispatch(
        GoalActions.saveGoal(
          goalTitle,
          goalColor,
          goalTasks,
          goalMotivation,
          goals,
          activeGoalID,
        ),
      ),
    addGoal: (goalTitle, goalColor, goalTasks, goalMotivation, activeGoalID) =>
      dispatch(
        GoalActions.addGoal(
          goalTitle,
          goalColor,
          goalTasks,
          goalMotivation,
          activeGoalID,
        ),
      ),
    deleteGoal: id => dispatch(deleteGoalAction.asyncDeleteGoal(id)),
    asyncSaveEditGoalFunc: (editGoal, goalData, frozenGoalTasksInEdit) =>
      dispatch(
        saveGoalActions.asyncSaveEditGoal(
          editGoal,
          goalData,
          frozenGoalTasksInEdit,
        ),
      ),
    closeModal: e => dispatch(toggleSetEditGoalModal.closeEditGoalModal(e)),
    inputMotivationClear: () =>
      dispatch(goalMotivationActions.inputMotivationClear()),
    inputGoalTitleClear: () => dispatch(goalTitleActions.inputGoalTitleClear()),
    inputTaskTitleClear: () =>
      dispatch(goalAddTaskActions.inputTaskTitleClear()),
    clearColor: () => dispatch(radioActionClearColor()),
    deleteFrozenGoalTasksInEditActionFunc: () =>
      dispatch(deleteFrozenGoalTasksInEditAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetGoalModal);
