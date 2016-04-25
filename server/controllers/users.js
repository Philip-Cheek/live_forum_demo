var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = (function() {
	return{
		get_emails: function(req, res){
			User.find({}, 'email', function(err, results){
				if (err){
					console.log(err);
				} else{
					console.log('woohoo')
					res.json(results);
				}
			});
		},
		create: function(req, res){
			console.log('wegethere')
			console.log('req')
			var pw_hash = bcrypt.hashSync(req.body.p_word, 10)
			console.log(req.body)
			console.log(pw_hash)

			var new_user = new User({
				first_name: req.body.f_name,
				last_name: req.body.l_name, 
				nickname: req.body.n_name,
				email: req.body.email,
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
			console.log(req)
			console.log('and if we can make it here')
			User.find({"email": req.body.email}, function(err, results){
				console.log(results)
				if (err){
					console.log(err);
				}else if (results.email.length < 1){
					console.log(results)
					res.json({'status': false})
				}else{
					var check = bcrypt.compareSync(req.body.user.p_word, results[0].password);
					res.json({'status': check})
				}
			});

		}
	};
})();