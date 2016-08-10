import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MainBar, LeftSidebar } from 'components';
import * as ArticleActions from '../../redux/actions/article_actions';
import * as LeftSidebarActions from '../../redux/actions/leftsidebar_actions';

function mapStateToProps(state) {
  return {
    articles: state.articles,
    leftsidebar: state.leftsidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, ArticleActions, LeftSidebarActions), dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    fetchArticles: PropTypes.func.isRequired,
    showLeftSidebar: PropTypes.func.isRequired,
    hideLeftSidebar: PropTypes.func.isRequired,
    articles: PropTypes.object.isRequired,
    leftsidebar: PropTypes.object.isRequired
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
    const styles = require('./App.scss');
    const { showLeftSidebar, hideLeftSidebar } = this.props;
    const { display } = this.props.leftsidebar;

    return (
        <MuiThemeProvider>
          <div id="app" styles={styles.app}>
            <MainBar />
            <LeftSidebar display={display}
                         show={showLeftSidebar}
                         hide={hideLeftSidebar}/>
            {this.props.children}
          </div>
        </MuiThemeProvider>
    );
  }
}
