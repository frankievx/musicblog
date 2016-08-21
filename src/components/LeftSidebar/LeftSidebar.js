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
    articles: PropTypes.array.isRequired,
    drawerStyles: PropTypes.object.isRequired
  };

  static defaultProps = {
    drawerStyles: {
      position: 'fixed',
      top: '7%',
      height: '93%'
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    drawer: false
  };

  showDrawer() {
    this.setState({ drawer: true });
  }
  hideDrawer() {
    this.setState({ drawer: false });
  }


  render() {
    const { showDrawer, hideDrawer } = this;
    const { drawer } = this.state;
    const { drawerStyles, articles } = this.props;

    return (
      <div id="leftsidebar" className={styles.leftsidebar} onMouseEnter={showDrawer.bind(this)} onMouseLeave={hideDrawer.bind(this)}>
        <img src={rightArrowIcon} className={styles.rightarrow}/>
        <img src={listIcon} className={styles.listicon}/>
        <Drawer open={drawer}
                containerStyle={drawerStyles}
                width={350}>
          <List>
            <Subheader> Articles </Subheader>
            {articles.map((item, index) => <ListArticle article={item} index={index}/>)}
          </List>
        </Drawer>
      </div>
    );
  }
}
