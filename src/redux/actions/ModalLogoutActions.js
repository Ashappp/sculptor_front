const cancelLogout = () => ({
  type: 'CANCEL_LOGOUT',
});

const okLogout = () => ({
  type: 'OK_LOGOUT',
});

const toggleLogoutModal = () => ({
  type: 'TOGGLE_LOGOUT_MODAL',
});

export default {
  cancelLogout,
  okLogout,
  toggleLogoutModal,
};
