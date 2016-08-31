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
    articles: state.articlelist.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArticleActions, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {

	static propTypes = {
		articles: PropTypes.array.isRequired,
    addArticles: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
	}

  componentDidMount() {
    const ScrollMagic = require('scrollmagic');
    const controller = new ScrollMagic.Controller({
      loglevel: 3,
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    // get all slides
    const slides = document.querySelectorAll('article');

    // create scene for every slide
    for (let i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
          loglevel: 3,
          triggerElement: slides[i]
        })
        .setPin(slides[i])
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }
  }

  render() {
  	const { articles, addArticles } = this.props;
    return (
  		<div id="home" className={classname(styles.home, 'articlelist')}>
 				{articles.map((item, index) => {
          return (
            <Article
              article={item}
              index={index}
              name={styles.home}
              addArticles={addArticles}/>
          );
        })}
			</div>
		);
  }
}
// <img src="/static/acidrapcover.jpg" className={styles.background}></img>
