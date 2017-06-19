//apiRoutes.js
var surveyData = require("../data/friends.js");

module.exports = function(app) {

    //get friends survey data
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
        res.json(true);
    });

    //post friends survey data
    app.post("/api/friends", function(req, res) {
        surveyData.push(req.body);
    });

};
