import React, { PropTypes, Component } from 'react';
import classname from 'classname';
import styles from './Article.scss';
// import Paper from 'material-ui/Paper';
// import ArticleHeader from './ArticleHeader';
import Player from './Player';
import ArticleBody from './ArticleBody';
// import ArticlePlaceholder from './ArticlePlaceholder';
// import { lazyload } from 'react-lazyload';

// @lazyload({ height: '100%', once: true, offset: 400})
export default class Article extends Component {
	static propTypes = {
		article: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired
	};

  render() {
  	const { text, source, backgroundsrc } = this.props.article;
  	const backgroundStyle = {
  		backgroundImage: 'url(' + backgroundsrc + ')'
  	};
  	// const paperStyle = {
			// position: 'relative',
			// width: '100%',
			// height: '100%',
			// 'padding-bottom': '60px',
			// overflow: 'hidden'
  	// };

    return (
    	<div className={classname(styles.article, 'article')}>
				<div className={styles.background} style={backgroundStyle}></div>
				<Player source={source}/>
				<ArticleBody text={text}/>
			</div>
		);
  }
}
