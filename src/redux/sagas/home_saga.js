import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import requestArticles from '../api/requestArticles';
import { FETCH_ARTICLES, INVALIDATE_ARTICLES, RECIEVE_ARTICLES} from '../actions/article_actions';


export function* fetchArticlesSaga() {
  try {
    const results = yield call(requestArticles);
    console.log('api results', results);
    yield put({ type: RECIEVE_ARTICLES, payload: results.data });
  } catch (err) {
    console.log('fetching articles failed', err);
    yield put({type: INVALIDATE_ARTICLES});
  }
}

export default function* watchFetchArticlesSaga() {
	yield* takeEvery( FETCH_ARTICLES, fetchArticlesSaga );
}

