import axios from 'axios';


const port = 3030;
const url = 'http://localhost:' + port;

export default function requestArticles() {
	return axios.get(url + '/articles');
}
