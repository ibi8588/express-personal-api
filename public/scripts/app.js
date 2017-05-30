console.log("Sanity Check: JS is working!");
let allPlayers = [];


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
      <td rowspan="7"> <img id="imageURL" src=${json[i] .imgURL} alt="Player" height="400" width="300"> </td>
      <td>Player Name:</td>
      <td>${json[i].name}&nbsp;</td>
    </tr>
    <tr>
      <td>Years Played:</td>
       <td>${json[i].yearsPlayed}&nbsp;</td>
    </tr>
    <tr>
      <td>Team:</td>
      <td>${json[i].team}&nbsp;</td>
    </tr>
    <tr>
      <td>Position:</td>
      <td>${json[i].position}&nbsp;</td>
    </tr>
    <tr>
      <td>World Series Wins:</td>
      <td>${json[i].worldSeriesWins}&nbsp;</td>
    </tr>
    <tr>
      <td>MVP:</td>
      <td>${json[i].mvp}&nbsp;</td>
    </tr>
    <tr>
      <td>Statistics:</td>
      <td><a href=${json[i].stats}&nbsp;>${json[i].stats}</a></td>
    </tr>
    <tr>
    <td colspan="2"><button>Delete Player</button></td>
    <td><button>Edit Data</button></td>
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

function newPlayerSuccess(json){
  
}

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
