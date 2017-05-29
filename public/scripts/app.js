console.log("Sanity Check: JS is working!");
// var express = require('express')
// var app = express();
// var bodyParser = require('body-parser');


$(document).ready(function() {
  //var $playerlist
  $.ajax({
    //$playerlist = $('#playerTarget'),
    method: 'GET',
    url: '/api/players',
    success: loadPlayers,
    error: playerError
  })


});

function loadPlayers(json) {
  $('#playerTarget').append(`<tbody>
    <tr>
      <td rowspan="7"> <img id="imageURL" src="http://placehold.it/400x300" alt="Player" height="400" width="300"> </td>
      <td>Player Name:</td>
      <td>name="name"</td>
    </tr>
    <tr>
      <td>Years Played:</td>
       <td>name="yearsPlayed"&nbsp;</td>
    </tr>
    <tr>
      <td>Team:</td>
      <td>name="team"&nbsp;</td>
    </tr>
    <tr>
      <td>Position:</td>
      <td>name="position"&nbsp;</td>
    </tr>
    <tr>
      <td>World Series Wins:</td>
      <td>name="worldSeriesWins"&nbsp;</td>
    </tr>
    <tr>
      <td>MVP:</td>
      <td>name="mvp"&nbsp;</td>
    </tr>
    <tr>
      <td>Statistics:</td>
      <td>name="statistics"&nbsp;</td>
      <div id="playerTarget">
    </tr>
  </tbody>`)

}

function playerError(e){
  console.log('error.')
}

function validate() {
  function errorMessage() {
    alert("Must create valid entry.");
  }
  if (document.createNewPlayer.name.value == "") {
    errorMessage();
    document.createNewPlayer.name.focus();
    return false;
  }
  if (document.createNewPlayer.yearsPlayed.value == 0) {
    errorMessage();
    document.createNewPlayer.yearsPlayed.focus();
    return false;
  }
  if (document.createNewPlayer.team.value == "") {
    errorMessage();
    return false;
  }
  if (document.createNewPlayer.imageURL.value = "") {
    errorMessage();
    return false
  }
  if (document.createNewPlayer.position.value = "") {
    errorMessage();
    return false;
  }
  if (document.createNewPlayer.worldSeriesWins = "" || NaN) {
    errorMessage();
    return false;
  }
  if (document.createNewPlayer.mvp.value = "" || NaN) {
    errorMessage();
    return false;
  }
  if (document.createNewPlayer.statistics.value = "") {
    errorMessage();
    return false;
  }
}
