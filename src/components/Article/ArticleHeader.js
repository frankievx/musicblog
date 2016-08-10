import React, { PropTypes, Component } from 'react';
import styles from './ArticleHeader.scss';

export default class ArticleHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  };

  render() {
  	return (
			<div className={styles.articleheader_container}>
  			<div id="articleheader" className={styles.articleheader}>
  				<div className={styles.articleheader_left}>
  					<p className={styles.title}>{this.props.title}</p>
  					<p className={styles.artist}>{this.props.artist}</p>
					</div>
  				<div className={styles.articleheader_right}>Social Media</div>
				</div>
			</div>
		);
  }
}
