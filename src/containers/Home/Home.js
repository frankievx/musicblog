import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import styles from './Home.scss';
import Article from '../../components/Article/Article';
import * as ArticleActions from '../../redux/actions/article_actions';

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
		fetchArticles: PropTypes.func.isRequired,
		articles: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchArticles();
	}


  render() {
  	const { articles } = this.props;
    return (
  		<div id="home" className={styles.home}>
 				{articles.items.map(item => <Article article={item}/>)}
			</div>
		);
  }
}
// <img src="/static/acidrapcover.jpg" className={styles.background}></img>
