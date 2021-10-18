'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage(key);
    console.log(gQuestsTree);
    if(!gQuestsTree){
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
    } else {
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
    }
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {

    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest;
    (res === 'yes') ? gCurrQuest = gCurrQuest.yes: gCurrQuest = gCurrQuest.no;

    // console.log(res);
    // gCurrQuest = 
    // TODO: update the gPrevQuest, gCurrQuest global vars

}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // Create new quest
    var newQuest = createQuest(newQuestTxt)
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = gCurrQuest
    console.log('newQuest', newQuest);

    console.log('gPrevQuest', gPrevQuest);
    console.log('gCurrQuest', gCurrQuest);
    // Set new quest on right node of tree
    console.log(gPrevQuest[lastRes]);
    gPrevQuest[lastRes] = newQuest

    console.log('gQuestsTree', gQuestsTree);
    // Prepare gCurrQuest for new game
    gCurrQuest = gQuestsTree

    // TODO: Create and Connect the 2 Quests to the quetsions tree
}

function getCurrQuest() {
    return gCurrQuest
}