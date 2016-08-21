import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { articlelist, currentArticle } from './article_reducer';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  articlelist,
  currentArticle
});
