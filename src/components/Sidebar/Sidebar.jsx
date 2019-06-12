/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateBtn from '../BtnCreateGoal/BtnCreateGoal';
import GoalList from './GoalList/GoalList';
import SetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';
import { addDefaultColor } from '../../redux/actions/radioAction';

import { showSidebarAction } from '../../redux/actions/sidebarAction';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';

import s from './Sidebar.module.css';

const Sidebar = ({
  showSidebar,
  openModal,
  goals,
  showSidebarAction,
  isSetGoalActive,
  addDefaultColorFunc,
}) => {
  return (
    <div
      className={`${s.Sidebar} ${
        showSidebar && !isSetGoalActive ? s.Sidebar_show : ''
      }`}
    >
      {showSidebar && (
        <More onClick={showSidebarAction} className={s.closeSidebar} />
      )}

      <h2 className={s.Title}>
        <a className={s.Link} href="https://sculptor.goit.co.ua">
          Sculptor
        </a>
      </h2>
      <CreateBtn
        isDisabled={goals.length >= 3}
        onClick={e => {
          openModal(e, goals, 'SET');
          addDefaultColorFunc();
        }}
      />
      <GoalList />
    </div>
  );
};

Sidebar.propTypes = {
  openModal: PropTypes.func.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  addDefaultColorFunc: PropTypes.func.isRequired,
};

const MSTP = state => {
  return {
    showSidebar: state.app.showSidebar,
    goals: state.goals,
    isSetGoalActive: state.editGoal.editing,
  };
};

function MDTP(dispatch) {
  return {
    openModal: (e, goals, type) =>
      dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
    showSidebarAction: () => dispatch(showSidebarAction()),
    addDefaultColorFunc: () => dispatch(addDefaultColor()),
  };
}

export default connect(
  MSTP,
  MDTP,
)(Sidebar);
