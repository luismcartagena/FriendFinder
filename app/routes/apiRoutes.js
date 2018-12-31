// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends, survey results, and the compatibility logic.
// ===============================================================================

const friendsData = require("../data/friends");


const scoreSurvey = (survey) => {
  let total = 0;
  for (let i = 0; i < survey.length; i++) {
      total += +survey[i];
  }
  
  return total;
}


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
      let userScore = scoreSurvey(req.body.scores);
      let matchProfile = friendsData[0];
      let matchPoint = Math.abs( scoreSurvey(matchProfile.scores) - userScore );

      for (let i = 0; i < friendsData.length; i++) {
          let contenderScore = Math.abs( scoreSurvey(friendsData[i].scores) - userScore );
          if ( contenderScore < matchPoint ) {
              matchPoint = contenderScore;
              matchProfile = friendsData[i];
          }
      }

      friendsData.push(req.body);
      res.json(matchProfile);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];

    res.json({ ok: true });
  });
};
