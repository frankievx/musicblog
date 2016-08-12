import React, { PropTypes, Component } from 'react';
import styles from './Article.scss';
import Paper from 'material-ui/Paper';
import ArticleHeader from './ArticleHeader';
import Player from './Player';
import ArticleBody from './ArticleBody';
import { lazyload } from 'react-lazyload';

@lazyload({ height: '100%', once: true, offset: 400 })
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
  	const paperStyle = {
			position: 'relative',
			width: '100%',
			height: '100%',
			'padding-bottom': '60px',
			overflow: 'hidden'
  	};

    return (
    	<div>
				<Paper style={paperStyle} zDepth={4}>
						<div className={styles.background} style={backgroundStyle}></div>
						<ArticleHeader title={title}
													 artist={artist}/>
						<Player source={source}/>
						<ArticleBody text={text}/>
				</Paper>
			</div>
		);
  }
}
