var users = require('./../controllers/users.js');

module.exports = function(app) {
	app.get('/email_list', function(req, res){
		users.get_email;
	});

	app.post('/create_friend', function(req, res){
		friends.create(req, res)
		res.redirect('')
	});
};

