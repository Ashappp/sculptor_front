import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 700,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const TextFields = ({ classes, id, onchange }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id={id}
        onchange={onchange}
        label="Email Address*"
        className={classes.textField}
        margin="normal"
      />

      <TextField
        id={id}
        onchange={onchange}
        label="Password*"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
      />
    </form>
  );
};
TextFields.propTypes = {
  classes: PropTypes.shape({}),
  id: PropTypes.element.isRequired,
  onchange: PropTypes.element.isRequired,
};
TextFields.defaultProps = {
  classes: {},
};

export default withStyles(styles)(TextFields);
