/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Registration.css';
import './Registration768.css';
import './Registration320.css';

// import { signInWithEmailAndPassword } from '../../server';
import Grid from '@material-ui/core/Grid';
import loginInputActions from '../../redux/actions/RegistrationInputActions';
// import { prototype } from 'react-transition-group/CSSTransition';

import API from '../../services/api';

const inputValidationRegEx = {
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
  password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
};

const isEmailValid = email => inputValidationRegEx.email.test(email);

const isPasswordValid = (password, confirmPassword) =>
  password.length !== 0 && password === confirmPassword;

const isNameValid = name => name.length !== 0;

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      err: '',
    };
  }

  handlerOnSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { name, email, password, err } = this.state;

    API.register({
      email,
      password,
      name,
    }).then(data => {
      // if (data.success) {
      //   history.push('/login');
      // } else {
      //   console.log('err in then', data);
      //   console.log('data', data);
      //   console.log('data.data', data.data);
      //   this.setState({ err: data });
      // }
      console.log('data', data);
    });
    // .catch(error => {
    //   console.log('error in catch', error);
    // });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { email, password, confirmPassword, name } = this.state;
    return (
      <div className="Registration">
        <Grid container>
          <Grid className="Registration-column" item lg={4} sm={4} xs={12}>
            <Grid container direction="column">
              <Grid item>
                <h1 className="h1 text-center">Sculptor</h1>
              </Grid>
              <Grid item>
                <form
                  onSubmit={e => this.handlerOnSubmit(e)}
                  className="form flex-column center-box shadow padding-all-25"
                  method="post"
                >
                  <input
                    onChange={this.handleChange('email')}
                    value={email}
                    className={
                      email.length > 0
                        ? `form-input ${
                            isEmailValid(email)
                              ? 'input__valid'
                              : 'input__invalid'
                          }`
                        : 'form-input'
                    }
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                  />

                  <input
                    onChange={this.handleChange('password')}
                    value={password}
                    className={
                      password.length > 0
                        ? `form-input ${
                            isPasswordValid(password, confirmPassword)
                              ? 'input__valid'
                              : 'input__invalid'
                          }`
                        : 'form-input'
                    }
                    type="password"
                    name="password"
                    placeholder="Password *"
                    required
                  />

                  <input
                    onChange={this.handleChange('confirmPassword')}
                    value={confirmPassword}
                    className={
                      confirmPassword.length > 0
                        ? `form-input ${
                            isPasswordValid(password, confirmPassword)
                              ? 'input__valid'
                              : 'input__invalid'
                          }`
                        : 'form-input'
                    }
                    type="password"
                    name="confirmPassword"
                    placeholder="Password Confirmation*"
                    required
                  />

                  <input
                    onChange={this.handleChange('name')}
                    value={name}
                    className={
                      name.length > 3
                        ? 'input__valid form-input'
                        : 'input__invalid form-input'
                    }
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                  />

                  <button
                    disabled={
                      !isEmailValid(email) &&
                      !isPasswordValid(password, confirmPassword) &&
                      !isNameValid(name)
                    }
                    className="btn"
                    type="submit"
                    label="Register"
                  >
                    Register
                  </button>
                  <p className="text-center">
                    <NavLink to="/login" className="link">
                      Login
                    </NavLink>
                  </p>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputs: state.inputs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: data => dispatch(loginInputActions.addUser(data)),
  };
}

Registration.propTypes = {
  history: PropTypes.shape,
};

Registration.defaultProps = {
  history: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
