import { FETCH_ARTICLES, INVALIDATE_ARTICLES,
         RECIEVE_ARTICLES, SET_ARTICLE,
         ADD_ARTICLES} from '../actions/article_actions';

const listState = {
  isFetching: false,
  didInvalidate: false,
  list: [],
  articles: []
};

const articleState = {
  title: '',
  artist: ''
};

function articlelist(state = listState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case INVALIDATE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true
      });
    case RECIEVE_ARTICLES:
    	return Object.assign({}, state, {
        list: action.payload,
        isFetching: false,
        didInvalidate: false
        // lastUpdated: action.receivedAt
      });
    case ADD_ARTICLES:
      return Object.assign({}, state, {
        articles: [ ...state.articles,
                    ...state.list.slice() ]
      });
    default:
      return state;
  }
}

function currentArticle(state = articleState, action) {
  switch (action.type) {
    case SET_ARTICLE:
      return Object.assign({}, state, {
        currentArticle: action.payload
      });
      default:
        return state;
  }
}


export default {
  articlelist: articlelist,
  currentArticle: currentArticle
};
