import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import { MainBar, LeftSidebar, RightSidebar } from '../../components';
import * as ArticleActions from '../../redux/actions/article_actions';

function mapStateToProps(state) {
  return {
    articlelist: state.articlelist,
    currentArticle: state.currentArticle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArticleActions, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    muiTheme: PropTypes.object.isRequired,
    articlelist: PropTypes.object.isRequired,
    currentArticle: PropTypes.object.isRequired,
    fetchArticles: PropTypes.func.isRequired
  };
  static defaultProps = {
    children: null,
    muiTheme: getMuiTheme({
      palette: {
        textColor: '#08415C',
        alternateTextColor: '#388697'
      },
      appBar: {
        height: 50,
      }
    })
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { muiTheme } = this.props;
    const { list, isFetching } = this.props.articlelist;
    const { title, artist } = this.props.currentArticle;
    if ( isFetching ) {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <CircularProgress />
        </MuiThemeProvider>
      );
    }

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div id="app" styles={styles.app}>
            <MainBar title={title}
                     artist={artist}/>
            <LeftSidebar articles={list}/>
            <RightSidebar />
            {this.props.children}
          </div>
        </MuiThemeProvider>
    );
  }
}
