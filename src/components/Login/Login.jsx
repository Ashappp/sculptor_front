/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import LoginButton from '../Button/LoginButton/LoginButton';
import './Login.css';
import './Login768.css';
import './Login320.css';

import Grid from '@material-ui/core/Grid';
import loginInputActions from '../../redux/actions/LoginInputActions';

import API from '../../services/api';

const styles = () => ({
  button: {
    color: '#ffffff',
    textTransform: 'capitalize',
    userSelect: 'none',
    fontSize: '1.4rem',

    transition: 'all 0.4s',

    margin: '3rem auto',

    border: 'none',
    backgroundColor: 'rgb(252, 132, 44)',
    boxShadow: '0px 4px 10px 0px rgba(252, 132, 44, 0.36)',
    width: '13rem',
    height: '4rem',
    // margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const inputValidationRegEx = {
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
  password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
};

const isEmailValid = email => inputValidationRegEx.email.test(email);

const isPasswordValid = password => password.length !== 0;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handlerOnSubmit = e => {
    e.preventDefault();
    const { addUser, history } = this.props;
    const { email, password } = this.state;
    console.log(history);

    API.login({ username: email, password })
      .then(data => {
        console.log('dataUSer', data);
        addUser(data);
        if (data.token) {
          history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;
    return (
      <div className="Login">
        <Grid container>
          <Grid className="Login-column" item lg={4} sm={4} xs={12}>
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
                            isPasswordValid(password)
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

                  <Button
                    type="submit"
                    label="Login"
                    disabled={
                      !isEmailValid(email) && !isPasswordValid(password)
                    }
                    variant="contained"
                    className={classes.button}
                  >
                    Login
                  </Button>
                  <p className="text-center">
                    <NavLink to="/registration" className="link">
                      Register
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

Login.propTypes = {
  addUser: PropTypes.func,
  classes: PropTypes.func.isRequired,
  history: PropTypes.shape,
};

Login.defaultProps = {
  addUser: '',
  history: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Login));
