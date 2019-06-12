import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const DeleteButton = ({ classes, onClick, value, className }) => (
  <IconButton
    aria-label="Delete"
    className={`${classes.margin} ${className}`}
    onClick={onClick}
    value={value}
  >
    <Delete fontSize="small" />
  </IconButton>
);
DeleteButton.propTypes = {
  classes: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  onClick: PropTypes.element.isRequired,
  value: PropTypes.element.isRequired,
  className: PropTypes.string,
};
DeleteButton.defaultProps = {
  classes: {},
  className: '',
};

export default withStyles(styles)(DeleteButton);
