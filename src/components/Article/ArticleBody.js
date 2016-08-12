import React, { PropTypes, Component } from 'react';
import styles from './ArticleBody.scss';

export default class ArticleBody extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	};

  render() {
  	return (
			<div className={styles.articlebody}>
					<p className={styles.articletext}>{this.props.text}</p>
			</div>
		);
	}
}
