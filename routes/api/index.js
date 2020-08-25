 const router = require('express').Router();
 const polly = require('./polly');
// const isAuthenticated = require('../../config/middleware/isAuthenticated');
 

// router.get('/secrets', isAuthenticated, (req, res) => {
// 	res.json('Talk is cheap. Show me the code. -Linus Torvalds');
// });

// //=============== MARIA ===================//
// //calls the aws polly function to speak some text
router.get('/polly:text', (req, res) => {
	const text = req.params.text;
	polly.outputAudio(text);
	res.json('done');
});

 module.exports = router;
