import axios from 'axios';


const port = 3030;
const url = __DEVELOPMENT__ ? 'http://localhost:' + port : 'http://www.frankiexv.com/api';

export default function requestArticles() {
	return axios.get(url + '/articles');
}
