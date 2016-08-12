import watchFetchArticlesSaga from './home_saga';

export default function* rootSaga() {
  yield [
    watchFetchArticlesSaga()
  ];
}
