import axios from 'axios';

export default {
	speakPolly: (text) => {
		return axios.get('/api/polly' + text);
	}
};
