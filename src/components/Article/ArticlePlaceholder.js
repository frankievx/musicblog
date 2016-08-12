import React, { Component } from 'react';
import styles from './ArticleBody.scss';
import CircularProgress from 'material-ui/CircularProgress';

export default class ArticleBody extends Component {

  render() {
  	return (
			<div className={styles.articleplaceholder}>
					<CircularProgress />
			</div>
		);
	}
}
