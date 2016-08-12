import axios from 'axios';


const port = 3030;
const url = if (process.env.NODE_ENV !== 'production') { 
	return 'http://localhost:' + port; 
} else {
	return 'http://www.frankiexv.com/api';
}
export default function requestArticles() {
	return axios.get(url + '/articles');
}
