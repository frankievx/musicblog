import { FETCH_ARTICLES, INVALIDATE_ARTICLES, RECIEVE_ARTICLES} from '../actions/article_actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

export default function articles(state = initialState, action) {
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
        items: action.payload,
        isFetching: false,
        didInvalidate: false
        // lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
