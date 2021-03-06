import React, { PropTypes, Component } from 'react';
import styles from './MainBar.scss';
// import Select from 'react-select';
// import { Toggle } from 'material-ui';
// import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';


export default class MainBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { title, artist } = this.props;
    return (
      <Toolbar className={styles.mainbar}>
        <ToolbarGroup>
          <ToolbarTitle className={styles.title} text="TrillVox" />
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarTitle text={title} />
          <ToolbarSeparator/>
          <ToolbarTitle text={artist}/>
        </ToolbarGroup>
        <ToolbarSeparator/>
        <ToolbarGroup text="Social Media" />
      </Toolbar>
    );
  }
}
