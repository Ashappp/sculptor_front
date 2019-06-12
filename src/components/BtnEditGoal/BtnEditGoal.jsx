/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import SvgEdit from '../Sidebar/svg/SvgEdit';

// import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  fab: {
    width: '3rem',
    height: '3rem',
    minHeight: '0',
    minWeigth: '0',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  extendedIcon: {
    fill: '#9ea6b2',
    weight: '1.8rem',
    height: '1.8rem',
  },
});

function FloatingActionButtons(props) {
  const { classes, onClick, value, btnID } = props;
  return (
    <>
      <Fab
        color="secondary"
        aria-label="Edit"
        className={classes.fab}
        onClick={onClick}
        value={value}
        data-id={btnID}
      >
        {/* <SvgEdit className={classes.extendedIcon} data-id={btnID} /> */}
        <Icon data-id={btnID}>
          <SvgEdit className={classes.extendedIcon} data-id={btnID} />
        </Icon>
      </Fab>
    </>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
