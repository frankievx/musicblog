import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classname from 'classname';
// import { Link } from 'react-router';
import styles from './Home.scss';
import Article from '../../components/Article/Article';
import * as ArticleActions from '../../redux/actions/article_actions';
// import * as LeftSidebarActions from '../../redux/actions/leftsidebar_actions';

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArticleActions, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {

	static propTypes = {
		articles: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
	}


  render() {
  	const { articles } = this.props;
    return (
  		<div id="home" className={classname(styles.home, 'articlelist')}>
 				{articles.items.map((item, index) => <Article article={item} index={index} name={styles.home}/>)}
			</div>
		);
  }
}
// <img src="/static/acidrapcover.jpg" className={styles.background}></img>
