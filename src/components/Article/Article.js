import React, { Component } from 'react';
import styles from './Article.scss';
import ArticleHeader from './ArticleHeader';
import Player from './Player';
import ArticleBody from './ArticleBody';

export default class Article extends Component {

  render() {
    return (
			<div className={styles.article}>
				<div className={styles.background}></div>
				<ArticleHeader />
				<Player />
				<ArticleBody />
			</div>
		);
  }
}
