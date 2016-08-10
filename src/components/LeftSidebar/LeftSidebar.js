import React, { PropTypes, Component } from 'react';
import styles from './LeftSidebar.scss';
import rightArrow from './Right_Arrow.png';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class LeftSidebar extends Component {
  static propTypes = {
    display: PropTypes.bool,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired
  };

  render() {
    const { display, show, hide} = this.props;
    const sidebarStyles = {
      position: 'fixed',
      top: '7%',
      height: '93%',
      'zIndex': '2',
      overflowY: 'scroll'
    };

    return (
        <div id="leftsidebar" className={styles.leftsidebar} onMouseEnter={show} onMouseLeave={hide}>
          <img src={rightArrow} className={styles.rightarrow}/>
          <Drawer open={display}
                  containerStyle={sidebarStyles}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
    );
  }
}
