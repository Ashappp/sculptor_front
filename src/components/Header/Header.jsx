import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './HeaderMobile.css';
import './HeaderTablet.css';
import './HeaderDesktop.css';
import DatePicker from '../DatePicker/DatePicker';

import ModalLogout from '../ModalLogout/ModalLogout';
import { showSidebarAction } from '../../redux/actions/sidebarAction';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';
import { ReactComponent as Dashboard } from '../../assets/images/icons/dashboard/baseline-dashboard-24px.svg';
import { ReactComponent as Results } from '../../assets/images/icons/chart/baseline-timeline-24px.svg';

const Header = ({ showSidebar }) => {
  return (
    <header className="header">
      <div className="header__icons">
        <More onClick={showSidebar} className="header__icon more" />
        <NavLink to="/" className="header__router dashboard selected">
          <Dashboard className="header__icon dashboard" />
          <span>Dashboard</span>
        </NavLink>
        <DatePicker />
        <NavLink to="/results" className="header__router results">
          <Results className="header__icon results" />
          <span>Results</span>
        </NavLink>
      </div>
      <p className="header__logo">Sculptor</p>
      <ModalLogout />
    </header>
  );
};

Header.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    showSidebar: state.app.showSidebar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showSidebar: () => dispatch(showSidebarAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
