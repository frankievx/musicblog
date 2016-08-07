import React, { Component } from 'react';
import styles from './ArticleHeader.scss';

export default class ArticleHeader extends Component {

  render() {
  	return (
			<div className={styles.articleheader_container}>
  			<div id="articleheader" className={styles.articleheader}>
  				<div className={styles.articleheader_left}>
  					<p className={styles.title}>Song Title</p>
  					<p className={styles.artist}>Artist</p>
					</div>
  				<div className={styles.articleheader_right}>Social Media</div>
				</div>
			</div>
		);
  }
}
