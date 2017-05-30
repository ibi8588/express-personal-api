// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

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
    imgURL: "",
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
