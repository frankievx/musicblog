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
  	const { title, artist, text, source } = this.props.article;
    return (
			<div className={styles.article}>
				<div className={styles.background}></div>
				<ArticleHeader title={title}
											 artist={artist}/>
				<Player source={source}/>
				<ArticleBody text={text}/>
			</div>
		);
  }
}
