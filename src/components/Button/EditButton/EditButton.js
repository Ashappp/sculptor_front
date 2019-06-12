import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Create from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const EditButton = ({ classes, onClick, value }) => (
  <IconButton
    aria-label="Delete"
    className={classes.margin}
    onClick={onClick}
    value={value}
  >
    <Create fontSize="small" />
  </IconButton>
);
EditButton.propTypes = {
  classes: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  onClick: PropTypes.element.isRequired,
  value: PropTypes.element.isRequired,
};
EditButton.defaultProps = {
  classes: {},
};

export default withStyles(styles)(EditButton);
