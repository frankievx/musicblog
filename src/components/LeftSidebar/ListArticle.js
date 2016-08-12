import React, { PropTypes, Component } from 'react';
// import styles from './ListArticle.scss';
import { lazyload } from 'react-lazyload';
// import MenuItem from 'material-ui/MenuItem';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

@lazyload({height: 50, once: true})
export default class ListArticle extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { title, artist, backgroundsrc } = this.props.article;

    return (
      <div>
        <ListItem leftAvatar={<Avatar src={backgroundsrc}/>}
                  primaryText={title}
                  secondaryText={artist}
                  secondaryTextLines={2}/>
        <Divider />
      </div>
    );
  }
}
