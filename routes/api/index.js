
const router = require('express').Router();
const db = require('../../models');
//  const polly = require('./polly');
// const isAuthenticated = require('../../config/middleware/isAuthenticated');

// //=============== MARIA ===================//
// //calls the aws polly function to speak some text
// router.get('/polly:text', (req, res) => {
// 	const text = req.params.text;
// 	polly.outputAudio(text);
// 	res.json('done');
// });

//get all event for the user
router.get('/getuserevents/:UserId', (req, res) => {
	db.Event
		.findAll(({
            where: {
              UserId: req.params.UserId
            }
          }))
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			if (err) {
				res.status(500).json(err);
			}
		});


});

//get event for editing
router.get('/geteditevent/:eventId', (req, res) => {
	db.Event.findOne({
		where: {
		  id: req.params.eventId
		}
	  })
		.then((data) => {
		  res.json(data);
		})
		.catch((err) => {
		  if (err) {
			res.status(500).json(err);
		  }
		});
});

//update an event
router.put('/updateevent/:eventId', (req, res) => {
	db.Event.update({
		event_name: req.body.eventName,
		description: req.body.description,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		date: req.body.date,
		website: req.body.website,
		contact_person: req.body.contactPerson,
		contact_email: req.body.contactEmail,
		contact_number: req.body.contactNumber,
		image: req.body.image
	}, {
	  where:
		{ id: req.params.eventId }
	})
	  .then((data) => {
		res.json(data);
	  })
	  .catch((err) => {
		if (err) {
		  res.status(500).json(err);
		}
	  });
  });

  //insert a comment
  router.post('/createcomment', (req, res) => {
	console.log(req.body);
	db.EventComment.create({
			comment_detail: req.body.userReview.comment,
			UserId: req.body.userReview.userId,
			EventId: req.body.userReview.eventId,
			

		})
		.then((dbResponse) => {
			res.json(dbResponse);
			console.log(dbResponse);
		})
		.catch((err) => {
			res.json(err);
		});
  });

  //Get all comments for an event
  router.get('/geteventcomments/:eventId', (req, res) => {
	
	  eventId= req.params.eventId
	db.EventComment.findAll(({
            where: {
              EventId: eventId
            }
          }))
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			if (err) {
				res.status(500).json(err);
			}
		});
});

//get the review data
router.get('/getreviewer/:userId', (req, res) => {
	db.User.findOne({
	  where: {
		id: req.params.userId
	  }
	})
	  .then((data) => {
		res.json(data);
		console.log(data)
	  })
	  .catch((err) => {
		if (err) {
		  res.status(500).json(err);
		}
	  });
  });

  //get all users attending an event
  router.get('/geteventattendees/:eventId', (req, res) => {

	eventId= req.params.eventId
	db.EventAttendee.findAll(({
			where: {
			EventId: eventId
			}
		}))
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			if (err) {
				res.status(500).json(err);
			}
		});
});

//get all the event comments for the profile page
router.get('/getcommentsforprofile/:eventId', (req, res) => {
	
	eventId= req.params.eventId
  db.EventComment.findAll(({
		  where: {
			EventId: eventId
		  }
		}))
	  .then((data) => {
		  res.json(data);
	  })
	  .catch((err) => {
		  if (err) {
			  res.status(500).json(err);
		  }
	  });
});
  


module.exports = router;

