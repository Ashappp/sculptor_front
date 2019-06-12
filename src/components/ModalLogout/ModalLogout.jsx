/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Draggable from 'react-draggable';

import ModalLogoutActions from '../../redux/actions/ModalLogoutActions';

import './ModalLogout.css';

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

const ModalLogout = ({
  cancelLogout,
  okLogout,
  isLogoutModalOpen,
  toggleLogoutModal,
}) => {
  return (
    <div>
      <Button
        color="inherit"
        onClick={toggleLogoutModal}
        className="header__router logout"
      >
        Logout
      </Button>
      <Grid container>
        <Grid item>
          <Dialog
            open={isLogoutModalOpen}
            onClose={toggleLogoutModal}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle
              id="draggable-dialog-title"
              disableTypography
              className="DialogTitle"
            >
              Are you sure you want to leave?
            </DialogTitle>
            {/* <DialogContent>
            <DialogContentText>
              Are you sure you want to leave?
            </DialogContentText>
          </DialogContent> */}
            <DialogActions className="DialogActions">
              <Grid container justify="center">
                <Grid item>
                  <Button
                    onClick={() => {
                      cancelLogout();
                      toggleLogoutModal();
                    }}
                    color="primary"
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={okLogout} color="primary">
                    <a href="/login" className="ModalLogout__btn--logout">
                      Logout
                    </a>
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLogoutModalOpen: state.isLogoutModalOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelLogout: () => dispatch(ModalLogoutActions.cancelLogout()),
    okLogout: () => dispatch(ModalLogoutActions.okLogout()),
    toggleLogoutModal: () => dispatch(ModalLogoutActions.toggleLogoutModal()),
  };
}

ModalLogout.propTypes = {
  cancelLogout: PropTypes.func.isRequired,
  okLogout: PropTypes.func.isRequired,
  isLogoutModalOpen: PropTypes.bool,
  toggleLogoutModal: PropTypes.func.isRequired,
};

ModalLogout.defaultProps = {
  isLogoutModalOpen: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLogout);
