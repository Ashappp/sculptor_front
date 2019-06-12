import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Motivation from '../../redux/actions/goalMotivationActions';

import './ModalGoalMotivation.css';

const ModalGoalMotivation = ({ inputMotivation, goalMotivation, editGoal }) => {
  return (
    <div className="ModalGoalMotivation">
      <label htmlFor="inputMotivation" className="GoalMotivation__label">
        Motivation
        <input
          className="GoalMotivation__input"
          type="text"
          name="inputMotivation"
          id="inputMotivation"
          onChange={inputMotivation}
          defaultValue={editGoal.data.goalMotivation || goalMotivation}
        />
      </label>
    </div>
  );
};

ModalGoalMotivation.propTypes = {
  inputMotivation: PropTypes.func.isRequired,
  goalMotivation: PropTypes.string,
  editGoal: PropTypes.shape.isRequired,
};

ModalGoalMotivation.defaultProps = {
  goalMotivation: '',
};

function mapStateToProps(state) {
  return {
    goalMotivation: state.goalData.goalMotivation,
    editGoal: state.editGoal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputMotivation: e => dispatch(Motivation.inputMotivation(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGoalMotivation);
