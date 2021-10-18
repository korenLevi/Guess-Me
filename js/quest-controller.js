'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;
const key = 'storage';
$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({
  ans: 'yes'
}, onUserResponse);
$('.btn-no').click({
  ans: 'no'
}, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  // TODO: hide the game-start section
  $('.game-start').hide()
  renderQuest();
  // const $quest = $('.quest')
  $('.quest').show()
  // TODO: show the quest section
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text
  console.log(gCurrQuest.txt);
  
  $('.questH').text(gCurrQuest.txt)
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  // If this node has no children
  console.log(gCurrQuest);
  console.log(isChildless(getCurrQuest()));
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!');
      // TODO: improve UXd
    } else {
      alert('I dont know...teach me!');
      // TODO: hide and show new-quest section
      $('.quest').hide()
      $('.new-quest').show();
      $('.questH').hide();
    }
  } else {
    // TODO: update the lastRes global var
    
    gLastRes = res;
    moveToNextQuest(res);
    renderQuest();
  }
}

function onAddGuess(ev) {
  
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();

  addGuess(newQuest, newGuess, gLastRes)
  // TODO: Get the inputs' values
  // TODO: Call the service addGuess
  saveToStorage(key, gQuestsTree)
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  // $()
  gLastRes = null;
  // renderGame - need to make sure gCurrQuest is the first quest
  // renderGame()
  // loadFromStorage(key);
}
