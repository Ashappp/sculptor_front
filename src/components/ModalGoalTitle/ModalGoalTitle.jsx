import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GoalTitle from '../../redux/actions/goalTitleActions';

import './ModalGoalTitle.css';

const GoalType = styled.h5`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1.4rem;
  color: rgba(185, 195, 200, 255);
  width: 15%;

  ::before {
    background-color: ${props => props.goalColor || 'gray'};
    content: '';
    display: block;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.2rem;
  }
`;

const ModalGoalTitle = ({
  inputGoalTitle,
  goalTitle,
  goalColor,
  goalNumber,
  editGoal,
}) => {
  return (
    <div className="ModalGoalTitle">
      <GoalType goalColor={goalColor}>Goal #{goalNumber}</GoalType>
      <input
        className="ModalGoalTitle__input"
        type="text"
        name="ModalGoalTitle"
        id="ModalGoalTitle"
        placeholder="Enter Goal Name"
        defaultValue={editGoal.data.goalTitle || goalTitle}
        onChange={inputGoalTitle}
      />
    </div>
  );
};

ModalGoalTitle.propTypes = {
  inputGoalTitle: PropTypes.func.isRequired,
  goalTitle: PropTypes.string.isRequired,
  goalColor: PropTypes.string.isRequired,
  goalNumber: PropTypes.number.isRequired,
  editGoal: PropTypes.shape.isRequired,
};

function mapStateToProps(state) {
  return {
    goalTitle: state.goalData.goalTitle,
    goalColor: state.goalData.goalColor,
    goalNumber: state.goalData.goalNumber,
    editGoal: state.editGoal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputGoalTitle: e => dispatch(GoalTitle.inputGoalTitle(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGoalTitle);
