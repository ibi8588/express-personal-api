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
  for (i = 0; i < json.length; i++) {
    $('#playerTarget').append(

      `<table id="playerInformation">
  <tbody>
    <tr>
      <td rowspan="7"> <img id="imageURL" src=${json[i] .imgURL} alt="Player" title="No picture" height="400" width="300"> </td>
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
    <td colspan="2"><button id="delete">Delete Player</button></td>
    <td><button id="edit">Edit Data</button></td>
   </tr>
  </tbody>
</table>`
    )
  }
}

$('#createNewPlayer').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/api/players',
    data: $(this).serialize(),
    success: newPlayerSuccess,
    error: newPlayerError
  })
})

$('#delete').on('click', function() {
  $.ajax({
    method: 'DELETE',
    url: 'api/players/' + $(this).attr(''),
    success: deletePlayer,
    error: deleteError
  });
});

$('#edit').on('click', function(){
  event.preventDefault();
  var playerId = $(this).closest('#playerInformation').attr('player-id');

     // find the player to update by its id
     var playerUpdate = allPlayers.filter(function (player) {
       return Player._id == playerId;
     })[0];

     // serialze form data
     var updatedPlayer = $(this).serialize();
$.ajax({
       type: 'PUT',
       url: '/api/players' + '/' + playerId,
       data: updatedPlayer,
       success: function(data) {
         // replace todo to update with newly updated version (data)
         allPlayer.splice(allPlayers.indexOf(updatedPlayer), 1, data);

         // render all todos to view
         render();
       }
     });
   })

function deletePlayer(json) {
  let player = json;
  let playerId = player.__id;
  for (var i = 0; i < allBooks.length; i++) {
    if (allPlayers[i]._id === playerId) {
      allPlayers.splice(i, 1);
      break; // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteError() {
  console.log('delete player error.')
}

function newPlayerSuccess(json) {
  $('#createNewPlayer input').val('');
  allPlayers.push(json);
  render();
}

function playerError(e) {
  console.log('load player error.')
}

//validate the information put into the form to create a player.
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
