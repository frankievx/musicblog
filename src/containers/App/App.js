import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import { MainBar, LeftSidebar, RightSidebar } from 'components';
import * as ArticleActions from '../../redux/actions/article_actions';
import * as LeftSidebarActions from '../../redux/actions/leftsidebar_actions';
import * as RightSidebarActions from '../../redux/actions/rightsidebar_actions';

function mapStateToProps(state) {
  return {
    articles: state.articles,
    leftsidebar: state.leftsidebar,
    rightsidebar: state.rightsidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, ArticleActions, LeftSidebarActions, RightSidebarActions), dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    fetchArticles: PropTypes.func.isRequired,
    showLeftSidebar: PropTypes.func.isRequired,
    hideLeftSidebar: PropTypes.func.isRequired,
    showRightSidebar: PropTypes.func.isRequired,
    hideRightSidebar: PropTypes.func.isRequired,
    articles: PropTypes.object.isRequired,
    leftsidebar: PropTypes.object.isRequired,
    rightsidebar: PropTypes.object.isRequired
  };
  static defaultProps() {
    return {
      children: null // or [] I guess
    };
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { showLeftSidebar, hideLeftSidebar, showRightSidebar, hideRightSidebar } = this.props;
    const articles = this.props.articles.items;
    const leftDisplay = this.props.leftsidebar.display;
    const rightDisplay = this.props.rightsidebar.display;
    const muiTheme = getMuiTheme({
      palette: {
        textColor: '#08415C',
        alternateTextColor: '#388697'
      },
      appBar: {
        height: 50,
      },
    });
    if ( articles === [] ) {
      return (<CircularProgress />);
    }

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div id="app" styles={styles.app}>
            <MainBar />
            <LeftSidebar display={leftDisplay}
                         show={showLeftSidebar}
                         hide={hideLeftSidebar}
                         articles={articles}/>
            <RightSidebar display={rightDisplay}
                          show={showRightSidebar}
                          hide={hideRightSidebar}/>
            {this.props.children}
          </div>
        </MuiThemeProvider>
    );
  }
}
