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
    imgURL: "http://l1.yimg.com/bt/api/res/1.2/iJWkGNnmmn3M3pxxSjdbqg/YXBwaWQ9eW5ld3NfbGVnbztpbD1wbGFuZTtxPTc1O3c9NjAw/http://media.zenfs.com/en/person/Ysports/giancarlo-stanton-baseball-headshot-photo.jpg",
    position: "C",
    worldSeriesWins: 14,
    mvp: 5,
    stats: "http://baseball.zengm.com/l/2/player/2281"
  },
  {
    name: "Billy Brown",
    yearsPlayed: 17,
    team: "Miami Cyclones",
    imgURL: "https://s-media-cache-ak0.pinimg.com/736x/dc/f6/c2/dcf6c2fcf38826fb0da8c62e89977841.jpg",
    position: "LF",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/7273"
  },
  {
    name: "Craig Rodriguez",
    yearsPlayed: 16,
    team: "Phoenix Vultures",
    imgURL: "https://www.outsidepitchmlb.com/wp-content/uploads/2013/08/michael-morse-baseball-headshot-photo.jpg",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/5832"
  },
  {
    name: "Matthew Christopher",
    yearsPlayed: 16,
    team: "Chicago Whirlwinds",
    imgURL: "http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/44/b447b4d5-8a66-5198-98f0-0ed800f4cfe2/b447b4d5-8a66-5198-98f0-0ed800f4cfe2.image.jpg",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 1,
    stats: "http://baseball.zengm.com/l/2/player/5178"
  },
  {
    name: "Jesse Hamilton",
    yearsPlayed: 14,
    team: "Phoenix Vultures",
    imgURL: "http://offenburger.com/wp-content/uploads/wppa/329.jpg?ver=1",
    position: "3B",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2915"
  },
  {
    name: "Dwight Kerr",
    yearsPlayed: 15,
    team: "Houston Apollos",
    imgURL: "http://d29m18w01sxjzp.cloudfront.net/sports/mlb/headshots/e1633ff9-8c46-4698-9bea-3eecd478fa94v2.jpg",
    position: "3B",
    worldSeriesWins: 1,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/6008"
  },
  {
    name: "Richard Evans",
    yearsPlayed: 17,
    team: "San Francisco Venture Capitalists",
    imgURL: "http://ww1.hdnux.com/photos/52/44/67/11161032/5/920x920.jpg",
    position: "1B",
    worldSeriesWins: 4,
    mvp: 1,
    stats: "http://baseball.zengm.com/l/2/player/6848"
  },
  {
    name: "Jason Janes",
    yearsPlayed: 11,
    team: "Phoenix Vultures",
    imgURL: "http://d3k2oh6evki4b7.cloudfront.net/req/201704071/images/headshots/9/9f4721ab_mlbam.jpg",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 3,
    stats: "http://baseball.zengm.com/l/2/player/7017"
  },
  {
    name: "Alan Fleck",
    yearsPlayed: 16,
    team: "San Francisco Venture Capitalists",
    imgURL: "http://l1.yimg.com/bt/api/res/1.2/staXcnk8lOjulxGUPHpang/YXBwaWQ9eW5ld3NfbGVnbztpbD1wbGFuZTtxPTc1O3c9NjAw/http://media.zenfs.com/en/person/Ysports/prince-fielder-baseball-headshot-photo.jpg",
    position: "LF",
    worldSeriesWins: 10,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/5559"
  },
  {
    name: "Jacob Sabatini",
    yearsPlayed: 14,
    team: "San Francisco Venture Capitalists",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/6/68/Steven_Wright_1994.jpg",
    position: "LF",
    worldSeriesWins: 14,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2187"
  }
];

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
  res.json(players_list);
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
