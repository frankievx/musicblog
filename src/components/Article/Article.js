import React, { PropTypes, Component } from 'react';
import styles from './Article.scss';
import ArticleHeader from './ArticleHeader';
import Player from './Player';
import ArticleBody from './ArticleBody';

export default class Article extends Component {
	static propTypes = {
		article: PropTypes.object.isRequired
	};

  render() {
  	const { title, artist, text, source, backgroundsrc } = this.props.article;
  	console.log('styles background', styles.background);
  	const backgroundStyle = {
  		backgroundImage: 'url(' + backgroundsrc + ')'
  	};

    return (
    	<div>
				<div className={styles.article}>
					<div className={styles.background} style={backgroundStyle}></div>
					<ArticleHeader title={title}
												 artist={artist}/>
					<Player source={source}/>
					<ArticleBody text={text}/>
				</div>
				<div className={styles.buffer}></div>
			</div>
		);
  }
}
