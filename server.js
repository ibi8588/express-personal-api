// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
//player list for server test.
var players_list = [
  {
    name: "Ibrahim Aldridge",
    yearsPlayed: 32,
    team: "San Francisco Venture Capitalists",
    imgURL: "https://lh3.googleusercontent.com/-yDMMcpIxaMQ/AAAAAAAAAAI/AAAAAAAAHbw/RCCjxJLrSz4/s640/photo.jpg",
    position: "CF",
    worldSeriesWins: 30,
    mvp: 10,
    stats: "http://baseball.zengm.com/l/2/player/1068"
  },
  {
    name: "Donald Barney",
    yearsPlayed: 17,
    team: "San Francisco Venture Capitalists",
    imgURL: "http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28963.png&w=350&h=254",
    position: "C",
    worldSeriesWins: 14,
    mvp: 5,
    stats: "http://baseball.zengm.com/l/2/player/2281"
  },
  {
    name: "Billy Brown",
    yearsPlayed: 17,
    team: "Miami Cyclones",
    imgURL: "",
    position: "LF",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2281"
  },
  {
    name: "Craig Rodriguez",
    yearsPlayed: 16,
    team: "Phoenix Vultures",
    imgURL: "",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/5832"
  },
  {
    name: "Matthew Christopher",
    yearsPlayed: 16,
    team: "Chicago Whirlwinds",
    imgURL: "",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 1,
    stats: "http://baseball.zengm.com/l/2/player/5178"
  },
  {
    name: "Jesse Hamilton",
    yearsPlayed: 14,
    team: "Phoenix Vultures",
    imgURL: "",
    position: "3B",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2915"
  },
  {
    name: "Dwight Kerr",
    yearsPlayed: 15,
    team: "Houston Apollos",
    imgURL: "",
    position: "3B",
    worldSeriesWins: 1,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/6008"
  },
  {
    name: "Richard Evans",
    yearsPlayed: 17,
    team: "San Francisco Venture Capitalists",
    imgURL: "",
    position: "1B",
    worldSeriesWins: 4,
    mvp: 1,
    stats: "http://baseball.zengm.com/l/2/player/6848"
  },
  {
    name: "Jason Janes",
    yearsPlayed: 11,
    team: "Phoenix Vultures",
    imgURL: "",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 3,
    stats: "http://baseball.zengm.com/l/2/player/7017"
  },
  {
    name: "Alan Fleck",
    yearsPlayed: 16,
    team: "San Francisco Venture Capitalists",
    imgURL: "",
    position: "LF",
    worldSeriesWins: 10,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/5559"
  },
  {
    name: "Jacob Sabatini",
    yearsPlayed: 14,
    team: "San Francisco Venture Capitalists",
    imgURL: "",
    position: "LF",
    worldSeriesWins: 14,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2187"
  }
];

/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    // woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
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

app.get('/api/players', function(req, res){
  res.json(players_list)
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
