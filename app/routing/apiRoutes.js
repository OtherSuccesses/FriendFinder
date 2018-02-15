var friends = require("./../data/friends.js");

module.exports = function(app){
	var user;
	app.post("/api/friends", function(req, res){
		module.exports.user = req.body;
		friends.array.push(req.body);
		
	})
}