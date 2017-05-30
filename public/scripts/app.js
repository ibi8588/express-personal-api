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

function loadPlayers(json) {
  console.log(json)
  for (i = 0; i < json.length; i++) {
    $('#playerTarget').append(

      `<table id="playerInformation">
  <tbody>
    <tr>
      <td rowspan="7"> <img id="imageURL" src=${json[i].imgURL} alt="Player" height="400" width="300"> </td>
      <td>Player Name:</td>
      <td>${json[i].name}</td>
    </tr>
    <tr>
      <td>Years Played:</td>
       <td>${json[i].yearsPlayed}</td>
    </tr>
    <tr>
      <td>Team:</td>
      <td>${json[i].team}</td>
    </tr>
    <tr>
      <td>Position:</td>
      <td>${json[i].position}</td>
    </tr>
    <tr>
      <td>World Series Wins:</td>
      <td>${json[i].worldSeriesWins}</td>
    </tr>
    <tr>
      <td>MVP:</td>
      <td>${json[i].mvp}</td>
    </tr>
    <tr>
      <td>Statistics:</td>
      <td>${json[i].statistics}</td>
    </tr>
    <tr>
       <td colspan="3"><button>Delete Player</button></td>
   </tr>
  </tbody>
</table>`
    )
  }
}

$('#createNewPlayer').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/api/players',
    data: $(this).serialize(),
    success: newPlayerSuccess,
    error: newPlayerError
  })
})

function playerError(e) {
  console.log('load player error.')
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
