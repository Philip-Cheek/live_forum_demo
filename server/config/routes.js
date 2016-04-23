module.exports = function(app) {
	app.get('/', function (req, res){
  		res.render('index');
	});

	app.post('/create_friend', function(req, res){
		console.log(req.body)
		friends.create(req, res)
	});
};

