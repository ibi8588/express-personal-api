// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var players_list = [];
players_list.push(  {
    name: "Ibrahim Aldridge",
    yearsPlayed: 32,
    team: "San Francisco Venture Capitalists",
    imgURL: "https://lh3.googleusercontent.com/-yDMMcpIxaMQ/AAAAAAAAAAI/AAAAAAAAHbw/RCCjxJLrSz4/s640/photo.jpg",
    position: "CF",
    worldSeriesWins: 30,
    mvp: 10,
    stats: "http://baseball.zengm.com/l/2/player/1068"
  })
players_list.push(  {
    name: "Donald Barney",
    yearsPlayed: 17,
    team: "San Francisco Venture Capitalists",
    imgURL: "http://l1.yimg.com/bt/api/res/1.2/iJWkGNnmmn3M3pxxSjdbqg/YXBwaWQ9eW5ld3NfbGVnbztpbD1wbGFuZTtxPTc1O3c9NjAw/http://media.zenfs.com/en/person/Ysports/giancarlo-stanton-baseball-headshot-photo.jpg",
    position: "C",
    worldSeriesWins: 14,
    mvp: 5,
    stats: "http://baseball.zengm.com/l/2/player/2281"
  })
players_list.push(  {
    name: "Billy Brown",
    yearsPlayed: 17,
    team: "Miami Cyclones",
    imgURL: "https://s-media-cache-ak0.pinimg.com/736x/dc/f6/c2/dcf6c2fcf38826fb0da8c62e89977841.jpg",
    position: "LF",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/7273"
  })
players_list.push(  {
    name: "Craig Rodriguez",
    yearsPlayed: 16,
    team: "Phoenix Vultures",
    imgURL: "https://www.outsidepitchmlb.com/wp-content/uploads/2013/08/michael-morse-baseball-headshot-photo.jpg",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/5832"
  })
players_list.push(  {
    name: "Matthew Christopher",
    yearsPlayed: 16,
    team: "Chicago Whirlwinds",
    imgURL: "http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/44/b447b4d5-8a66-5198-98f0-0ed800f4cfe2/b447b4d5-8a66-5198-98f0-0ed800f4cfe2.image.jpg",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 1,
    stats: "http://baseball.zengm.com/l/2/player/5178"
  })
players_list.push(  {
    name: "Jesse Hamilton",
    yearsPlayed: 14,
    team: "Phoenix Vultures",
    imgURL: "http://offenburger.com/wp-content/uploads/wppa/329.jpg?ver=1",
    position: "3B",
    worldSeriesWins: 0,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2915"
  })
players_list.push(  {
    name: "Dwight Kerr",
    yearsPlayed: 15,
    team: "Houston Apollos",
    imgURL: "http://d29m18w01sxjzp.cloudfront.net/sports/mlb/headshots/e1633ff9-8c46-4698-9bea-3eecd478fa94v2.jpg",
    position: "3B",
    worldSeriesWins: 1,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/6008"
  })
players_list.push({
    name: "Richard Evans",
    yearsPlayed: 17,
    team: "San Francisco Venture Capitalists",
    imgURL: "http://ww1.hdnux.com/photos/52/44/67/11161032/5/920x920.jpg",
    position: "1B",
    worldSeriesWins: 4,
    mvp: 1,
    stats: "http://baseball.zengm.com/l/2/player/6848"
  })
players_list.push(  {
    name: "Jason Janes",
    yearsPlayed: 11,
    team: "Phoenix Vultures",
    imgURL: "http://d3k2oh6evki4b7.cloudfront.net/req/201704071/images/headshots/9/9f4721ab_mlbam.jpg",
    position: "1B",
    worldSeriesWins: 0,
    mvp: 3,
    stats: "http://baseball.zengm.com/l/2/player/7017"
  })
players_list.push(  {
    name: "Alan Fleck",
    yearsPlayed: 16,
    team: "San Francisco Venture Capitalists",
    imgURL: "http://l1.yimg.com/bt/api/res/1.2/staXcnk8lOjulxGUPHpang/YXBwaWQ9eW5ld3NfbGVnbztpbD1wbGFuZTtxPTc1O3c9NjAw/http://media.zenfs.com/en/person/Ysports/prince-fielder-baseball-headshot-photo.jpg",
    position: "LF",
    worldSeriesWins: 10,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/5559"
  })
players_list.push(  {
    name: "Jacob Sabatini",
    yearsPlayed: 14,
    team: "San Francisco Venture Capitalists",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/6/68/Steven_Wright_1994.jpg",
    position: "LF",
    worldSeriesWins: 14,
    mvp: 0,
    stats: "http://baseball.zengm.com/l/2/player/2187"
  })


db.Player.remove({}, function(err, players){

  db.Player.create(players_list, function(err, players){
    if (err) { return console.log('ERROR', err); }
    console.log("all players:", players);
    console.log("created", players.length, "players");
    process.exit();
  });

});
