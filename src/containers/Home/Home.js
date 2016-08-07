import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Home.scss';
import Article from '../../components/Article/Article';
// import Soundcloud from 'react-soundcloud-widget';


export default class Home extends Component {

  render() {
    return (
  		<div id="home" className={styles.home}>
 				<Article />
			</div>
		);
  }
}
// <img src="/static/acidrapcover.jpg" className={styles.background}></img>
