var users = require('./../controllers/users.js');

module.exports = function(app) {
	app.get('/email_list', function(req, res){
		users.get_emails(req, res);
	});

	app.post('/create_user', function(req, res){
		console.log(req.body)
		users.create(req, res);
	});

	app.post('/log_in', function(req, res){
		console.log('reach?');
		users.log_in(req, res);
	});
};

