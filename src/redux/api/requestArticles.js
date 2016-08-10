// import axios from 'axios';
import { FETCH_ARTICLES, INVALIDATE_ARTICLES, RECIEVE_ARTICLES} from '../actions/article_actions';


// const port = 3030;
// const url = 'http://localhost:';

export default function requestArticles() {
  return {
    types: [FETCH_ARTICLES, INVALIDATE_ARTICLES, RECIEVE_ARTICLES],
    promise: (client) => client.get('/serveArticles')
  };
}
