import React, { Component } from 'react';
import styles from './MainBar.scss';
// import Select from 'react-select';
// import { Toggle } from 'material-ui';
// import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';


export default class MainBar extends Component {


  render() {
    // const selectStyles = require('./react-select.css');

    return (
      <Toolbar className={styles.mainbar}>
        <ToolbarGroup>
          <ToolbarTitle className={styles.title} text="TrillVox" />
        </ToolbarGroup>
      </Toolbar>

    );
  }
}


        /*
        <div id="mainbar" className={styles.mainbar}>
          <div className={styles.title}> TrillVox </div>
          <Select classNames={selectStyles.Select}/>
          <div id="autoplay" className={styles.autoplay}>
            <p>Autoplay</p>
            <Toggle />
          </div>
        </div>
        */
