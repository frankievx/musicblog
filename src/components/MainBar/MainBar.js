import React, { Component } from 'react';
import Select from 'react-select';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toggle } from 'material-ui';


export default class MainBar extends Component {


  render() {
    const styles = require('./MainBar.scss');
    const selectStyles = require('./react-select.css');

    return (
        <div id="mainbar" className={styles.mainbar}>
      		<div className={styles.title}> TrillVox</div>
      		<Select classNames={selectStyles.Select}/>
      		<div id="autoplay" className={styles.autoplay}>
      			<p>Autoplay</p>
      			<MuiThemeProvider>
      			<Toggle />
      			</MuiThemeProvider>
    			</div>
        </div>
    );
  }
}
