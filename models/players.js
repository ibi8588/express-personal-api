var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: String,
  yearsPlayed: Number,
  team: String,
  imgURL: String,
  position: String,
  worldSeriesWins: Number,
  mvp: Number,
  stats: String
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
