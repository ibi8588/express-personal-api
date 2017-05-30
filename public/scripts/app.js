console.log("Sanity Check: JS is working!");
// var express = require('express')
// var app = express();
// var bodyParser = require('body-parser');


$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/players',
    success: loadPlayers,
    error: playerError
  })


});

function loadPlayers(json) {console.log(json)
  for(i = 0; i < json.length; i++){
    $('#playerTarget').append(

      `<table id="playerInformation">
  <tbody>
    <tr>
      <td rowspan="7"> <img id="imageURL" src="${json.imgURL}" alt="Player" height="400" width="300"> </td>
      <td>Player Name:</td>
      <td>${json.name}</td>
    </tr>
    <tr>
      <td>Years Played:</td>
       <td>${json.yearsPlayed}</td>
    </tr>
    <tr>
      <td>Team:</td>
      <td>${json.team}</td>
    </tr>
    <tr>
      <td>Position:</td>
      <td>${json.position}</td>
    </tr>
    <tr>
      <td>World Series Wins:</td>
      <td>${json.worldSeriesWins}</td>
    </tr>
    <tr>
      <td>MVP:</td>
      <td>${json.mvp}</td>
    </tr>
    <tr>
      <td>Statistics:</td>
      <td>${json.statistics}</td>
    </tr>
    <tr>
       <td colspan="3"><button>Delete Player</button></td>
   </tr>
  </tbody>
</table>`
)
  }
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
  };
  return true
}
