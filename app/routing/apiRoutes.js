var friends = require("./../data/friends.js");


apiRoutes = {
	user: "",
	bestMatch:{},

	routes: function(app){
		app.post("/api/friends", function(req, res){
			apiRoutes.user =req.body;
			console.log("req.body"+req.body)
			friends.friendsList.push(req.body);
			console.log(req.body.name);
			res.json({});
		});

		app.get("/bestFriends", function(req, res){
			var bestFriend= apiRoutes.findFriend(apiRoutes.user, friends.friendsList);
			console.log("what should be sent" + JSON.stringify(bestFriend));
			res.json(bestFriend);
		});
	},

	findFriend: function(user, request){
		var sum = function(a, b){
			return (a + b);
		}
		//console.log("request line 34" + JSON.stringify(request));
		//console.log(request.length);
		var newFriend = user.name;
		var newScores = user.scores;
		var friendArray = [];
		for(var i = 0; i < request.length-1; i ++){
			var currentMatch = request[i];
			console.log("New friend" + request[i]);
			var currentScores = request[i].scores;
		 	var matchesArray = [];
		 	for(var j = 0; j < currentScores.length; j++){
		 		matchesArray.push(Math.abs(newScores[j]-currentScores[j]));
		 	}
		 	var total = matchesArray.reduce(sum, 0);
		 	console.log(total);
		 	friendArray.push({name:request[i].name, image: request[i].image, score: total});
		}
		friendArray.sort(function(a,b){
			return a.score - b.score;
		});
		console.log("Friends! " + JSON.stringify(friendArray));
		var newBff = friendArray[0];
		console.log("newBff" + JSON.stringify(newBff));
		return newBff;
	}

}


module.exports = apiRoutes;