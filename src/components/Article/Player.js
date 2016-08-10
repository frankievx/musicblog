import React, { Component } from 'react';
import styles from './Player.scss';

export default class Player extends Component {

  render() {
  	return (
			<div className={styles.player}>
				<div className={styles.videoWrapper}>
					<iframe width="100%" height="500" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90243750&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				</div>
			</div>
		);
	}
}
