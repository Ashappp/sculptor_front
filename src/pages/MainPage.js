/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Container from '../Container/Container';
import Sidebar from '../components/Sidebar/Sidebar';

// Dashboard
import Dashboard from '../components/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import Backdrop from '../components/Backdrop/Backdrop';
import SetGoalModal from '../components/SetGoalModal/SetGoalModal';
import Picker from '../components/Picker/Picker';

import SetEditGoalModal from '../redux/actions/toggleSetEditGoalModalActions';
import { asyncGoalAction } from '../components/Dashboard/goalAction';
import { asyncTasksAction } from '../components/Dashboard/taskAction';

import Statistics from '../components/Statistics/Statistics';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { editGoal, showPicker } = this.props;

    return (
      <>
        <div className="main">
          <Sidebar className="main__left" />
          <div className="main__right">
            <Header />
            <div className="main__container">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/results" component={Statistics} />
              {/* <Route path="/results" component={TestResults} /> */}
            </div>
          </div>
        </div>
        {editGoal.editing && (
          <Backdrop>
            <SetGoalModal modalType={editGoal.modalType} />
          </Backdrop>
        )}
        {showPicker.openPickerModal && <Picker />}
      </>
    );
  }
}

App.propTypes = {
  editGoal: PropTypes.shape().isRequired,
  showPicker: PropTypes.shape({
    openPickerModal: PropTypes.bool,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    editGoal: state.editGoal,
    showPicker: state.showPicker,
    tasks: state.tasks,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (e, goals, type) =>
      dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
    getGoals: user => dispatch(asyncGoalAction(user)),
    getTasks: user => dispatch(asyncTasksAction(user)),
  };
}

export default connect(
  mapStateToProps,
  null,
)(App);
