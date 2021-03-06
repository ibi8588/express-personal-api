// require express and other modules
var express = require("express");
var app = express();
var db = require("./models")
// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */




/*
 * JSON API Endpoints
 */
 app.get('/', function homepage(req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    message: "Routes for my personal api",
    documentationUrl: "https://github.com/ibi8588/express-personal-api/blob/master/README.md", // github readme
    baseUrl: "https://protected-retreat-76331.herokuapp.com/", // heroku page
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // links to portfolio page
      {method: "GET", path: "/api/players", description: "Index of all baseball players"}, // Gets all baseball players
      {method: "POST", path: "/api/players/:id", description: "create a baseball player"},
      {method: "PUT", path: "/api/players/:id", description: "edit a player"},
      {method: "DELETE", path: "/api/players/:id", description: "deleta a player"}
    ]
  })
});
//profile page.
app.get('/api/profile', function profile(req, res) {
  res.json({
    name: "Ibrahim Aldridge",
    githubUsername: "ibi8588",
    githubLink: "https://github.com/ibi8588",
    githubProfileImage: "https://lh3.googleusercontent.com/-yDMMcpIxaMQ/AAAAAAAAAAI/AAAAAAAAHbw/RCCjxJLrSz4/s640/photo.jpg",
    personalSiteLink: "http://www.ibrahimaldridge.com",
    currentCity: "Oakland, CA",
    pets: [{name: "Sally", type: "Dog", breed: "Golden Retriever"}, {name: "Billy", type: "Lizard", breed: "Wild"}]
  })
})

//index of players.
app.get('/api/players', function(req, res){
  db.Player.find().populate('player')
    .exec(function(err, allPlayers){
    if (err) { console.log("player find error.")}
  res.json(allPlayers);
  });

});

//create a player.
app.post('/api/players/:id', function(req, res){
  var newPlayer = new db.Player({
    name: req.body.name,
    yearsPlayed: req.body.yearsPlayed,
    team: req.body.team,
    imgURL: req.body.imgURL,
    position: req.body.position,
    worldSeriesWins: req.body.worldSeriesWins,
    mvp: req.body.mvp,
    stats: req.body.stats
  });
  newPlayer.save(function(err, player){
    if (err){
      return console.log("create error " + err);
    }
    console.log("created ", + player.name)
    res.json(player);
  });
});

//delete a player.
app.delete('/api/players/:id', function(req, res){
  var playerId = req.params.id;
  db.Player.findOneAndRemove({ __id: playerId}, function(err, foundPlayer){
    res.json(foundPlayer)
  });
});

//update a player.
app.put('/api/players/:id', function update(req, res){
  var playerId = req.params.id;

  db.Player.findOne({ __id: playerId }, function(err, foundPlayer){
    if (err) {
      res.status(500).json({errod: err.message})
    } else {
      foundPlayer.player = req.body.player;
      foundPlayer.description = req.body.description;

      foundPlayer.save(function(err, savedPlayer){
        if(err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(savedPlayer);
        }
      });
    }
  });
});



/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
