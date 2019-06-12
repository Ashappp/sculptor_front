import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    background: '#46617f',
    color: '#fbf3e7',
    // width: 50,
    fontSize: 12,
    textTransform: 'capitalize',
    '&:hover': {
      background: '#46617f',
    },
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const SetButton = ({ classes, onClick, value, children }) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    onClick={onClick}
    value={value}
  >
    {children}
    <ArrowForward className={classes.rightIcon} />
  </Button>
);

SetButton.propTypes = {
  classes: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.element.isRequired,
  value: PropTypes.element.isRequired,
};
SetButton.defaultProps = {
  classes: {},
};

export default withStyles(styles)(SetButton);
