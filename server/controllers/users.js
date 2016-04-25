var mongoose = require('mongoose');
var User = mongoose.model('user');
var bcrypt = require('bcrypt');

module.exports = (function() {
	return{
		get_emails: function(req, res){
			User.find({}, 'email', function(err, results){
				if (err){
					console.log(err);
					return [];
				} else{
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var pw_hash = bcrypt.hashSync(req.body.user.p_word, 10)

			var new_user = new User({
				first_name: req.body.user.f_name,
				last_name: req.body.user.l_name, 
				nickname: req.body.user.n_name,
				email: req.body.user.email,
				password: pw_hash
			});

			new_user.save(function(err){
				if (err){
					console.log(err)
					return;
				} else{
					res.end();
				}
			});
		},
		log_in: function(req, res){
			User.find({"email": req.body.email}, function(err, results){
				if (err){
					console.log(err);
				}else if results.email.length < 1{
					res.json('status': false)
				}else{
					var check = bcrypt.compareSync(req.body.user.p_word, results[0].password);
					res.json('status': check)
				}
			});

		}
	};
})();