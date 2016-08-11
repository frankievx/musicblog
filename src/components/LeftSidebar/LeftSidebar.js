import React, { PropTypes, Component } from 'react';
import styles from './LeftSidebar.scss';
import rightArrowIcon from './Right_Arrow.png';
import listIcon from './ic_view_list_white_48dp_2x.png';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ListArticle from './ListArticle';

export default class LeftSidebar extends Component {
  static propTypes = {
    display: PropTypes.bool,
    show: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired
  };

  render() {
    const { display, show, hide, articles } = this.props;
    const sidebarStyles = {
      position: 'fixed',
      top: '7%',
      height: '93%'
    };

    return (
      <div id="leftsidebar" className={styles.leftsidebar} onMouseEnter={show} onMouseLeave={hide}>
        <img src={rightArrowIcon} className={styles.rightarrow}/>
        <img src={listIcon} className={styles.listicon}/>
        <Drawer open={display}
                containerStyle={sidebarStyles}
                width={350}>
          <List>
            <Subheader> Articles </Subheader>
            {articles.map(item => <ListArticle article={item}/>)}
          </List>
        </Drawer>
      </div>
    );
  }
}
