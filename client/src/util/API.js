import axios from 'axios';

export default {
	// Gets all books
	speakPolly: function(text) {
		return axios.get('/api/polly' + text);
	}
};
