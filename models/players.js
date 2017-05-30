var mongoose = require('mongoose');
Schema = mongoose.Schema;

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

module.export = Player;
