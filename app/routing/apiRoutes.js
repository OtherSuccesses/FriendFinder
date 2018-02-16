var friends = require("./../data/friends.js");

var findFriend = function(){
	var scoreArray = [];
	var user = {};
}

apiRoutes = {

	routes: function(app){
		app.post("/api/friends", function(req, res){
			module.exports.user = req.body;
			friends.array.push(req.body);
			res.json({});
		});

		app.get("/bestFriend", function(req, res){
			var bestFriend= findFriend();
			res.json(bestFriend);
		});
	}
}

module.exports = apiRoutes;