import React, { PropTypes, Component } from 'react';
import styles from './RightSidebar.scss';
import leftArrowIcon from './Left_Arrow.png';
import menuIcon from './ic_menu_white_48dp_2x.png';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class RightSidebar extends Component {
  static propTypes = {
    display: PropTypes.bool,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired
  };

  render() {
    const { display, show, hide} = this.props;


    return (
        <div id="rightsidebar" className={styles.rightsidebar} onMouseEnter={show} onMouseLeave={hide}>
          <img src={menuIcon} className={styles.menuicon}/>
          <img src={leftArrowIcon} className={styles.leftarrow}/>
          <Drawer open={display}
          				openSecondary={true}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
    );
  }
}
