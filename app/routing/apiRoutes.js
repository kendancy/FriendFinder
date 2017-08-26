//apiRoutes.js
var surveyData = require("../data/friends.js");

module.exports = function(app) {

    //get friends survey data
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    //post friends survey data
    app.post("/api/friends", function(req, res) {

        var closest = {
            name: "",
            photo: "",
            total: 1000
        }

        var userData = req.body;
        var userScores = userData.scores;
        var totalDiff = 0;

        for (var i=0; i < surveyData.length; i++) {
    
            var totalDiff = 0;
 
            for (var j=0; j < surveyData[i].scores[j]; j++) {
 
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(surveyData[i].scores[j]));
 
                if (totalDiff <= closest.total) {
                    closest.name = surveyData[i].name;
                    closest.photo = surveyData[i].photo;
                    closest.total = surveyData[i].totalDiff;
                }
            }
        }

        surveyData.push(userData);
        res.json(closest);
 
    });

};
