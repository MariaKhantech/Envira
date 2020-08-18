const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const polly = require ('./polly')

router.get('/secrets', isAuthenticated, (req, res) => {
	res.json('Talk is cheap. Show me the code. -Linus Torvalds');
});

router.get('/polly:text', (req, res) => {
  console.log('in the route' + req.params.text);
  polly.synthesizeSpeech(req.params.text);
  res.json("DONE")
});


module.exports = router;
