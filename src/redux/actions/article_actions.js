export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const INVALIDATE_ARTICLES = 'INVALIDATE_ARTICLES';
export const RECIEVE_ARTICLES = 'RECIEVE_ARTICLES';
export const SET_ARTICLE = 'SET_ARTICLE';
export const ADD_ARTICLES = 'ADD_ARTICLES';


export function fetchArticles() {
	return { type: FETCH_ARTICLES };
}

export function setArticle(article) {
	return { type: SET_ARTICLE, payload: article };
}

export function addArticles(index) {
	return { type: ADD_ARTICLES, payload: index };
}

