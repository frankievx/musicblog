import React, { PropTypes, Component } from 'react';
import styles from './RightSidebar.scss';
import leftArrowIcon from './Left_Arrow.png';
import menuIcon from './ic_menu_white_48dp_2x.png';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Popover from 'material-ui/Popover/Popover';
// import ArrowDropDown from './ic_arrow_drop_down_black_24dp_2x.png';

export default class RightSidebar extends Component {
  static propTypes = {
    anchorOrigin: PropTypes.bool,
    targetOrigin: PropTypes.bool
  };

  static defaultProps = {
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'top'
    },
    targetOrigin: {
      horizontal: 'right',
      vertical: 'top'
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    drawer: false,
    popover: false
  };

  displayDrawer() {
    this.setState({ drawer: true });
  }

  hideDrawer() {
    if (!this.state.popover) this.setState({ drawer: false });
  }

  showPopover(event) {
    event.preventDefault();

    this.setState({
      popover: true,
      anchorEl: event.currentTarget
    });
  }
  hidePopover() {
    this.setState({
      drawer: false,
      popover: false });
  }

  render() {
    // const { show, hide} = this.props;
    const { displayDrawer, hideDrawer, showPopover, hidePopover, anchorOrigin, targetOrigin } = this;
    const { drawer, popover, anchorEl } = this.state;

    return (
        <div
          id="rightsidebar"
          className={styles.rightsidebar}
          onMouseEnter={displayDrawer.bind(this)}
          onMouseLeave={hideDrawer.bind(this)}>
          <img src={menuIcon} className={styles.menuicon}/>
          <img src={leftArrowIcon} className={styles.leftarrow}/>
          <Drawer
            open={drawer}
    				openSecondary={true}>
            <div className={styles.header}>
              <p className={styles.headertext}> Navigation </p>
            </div>
            <Divider />
            <MenuItem primaryText="Home" />
            <MenuItem
              primaryText="Reddit"
              onClick={showPopover.bind(this)}
              onTouchTap={showPopover.bind(this)}/>
            <Popover
              open={popover}
              anchorEl={anchorEl}
              anchorOrigin={anchorOrigin}
              targetOrigin={targetOrigin}
              onRequestClose={hidePopover.bind(this)}
              children={[
              <MenuItem primaryText="Hip Hop" />,
              <MenuItem primaryText="Blues" />
              ]}/>
            <MenuItem primaryText="About" />
          </Drawer>
        </div>
    );
  }
}
