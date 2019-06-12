/*eslint-disable*/
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import MainPage from '../../pages/MainPage';
import loginInputActions from '../../redux/actions/LoginInputActions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    const { addUser } = this.props;
    const userData = localStorage.user;
    if (userData) {
      addUser(JSON.parse(userData));
    }
    this.setState({ loaded: true });
  }

  render() {
    const { user } = this.props;
    const { loaded } = this.state;

    return (
      <>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route
            path="/"
            // render={() => (loggedIn ? <MainPage /> : <Redirect to="/login" />)}
          >
            {loaded && user.token && <MainPage />}
            {loaded && !user.token && <Redirect to="/login" />}
          </Route>
        </Switch>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: data => dispatch(loginInputActions.addUser(data)),
  };
}

export default withRouter(
  hot(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(App),
  ),
);
