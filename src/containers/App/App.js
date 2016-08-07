import React, { Component, PropTypes } from 'react';
import { MainBar } from 'components';

// import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import Helmet from 'react-helmet';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
// import { InfoBar } from 'components';
// import { push } from 'react-router-redux';
// import config from '../../config';
// import { asyncConnect } from 'redux-async-connect';

// @asyncConnect([{
//   promise: ({store: {dispatch, getState}}) => {
//     const promises = [];

//     if (!isInfoLoaded(getState())) {
//       promises.push(dispatch(loadInfo()));
//     }
//     if (!isAuthLoaded(getState())) {
//       promises.push(dispatch(loadAuth()));
//     }

//     return Promise.all(promises);
//   }
// }])

// @connect(state => ({user: state.auth.user}), {logout, pushState: push})

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  static defaultProps() {
    return {
      children: null // or [] I guess
    };
  }

  constructor(props) {
    super(props);
  }


  render() {
    const styles = require('./App.scss');

    return (
        <div id="app" styles={styles.app}>
          <MainBar />
          {this.props.children}
        </div>
    );
  }
}
