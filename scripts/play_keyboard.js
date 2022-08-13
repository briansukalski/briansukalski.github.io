const idList = ['c-natural-1', 'c-sharp', 'd-natural', 'd-sharp', 'e-natural', 'f-natural', 'f-sharp', 'g-natural', 'g-sharp', 'a-natural', 'a-sharp', 'b-natural', 'c-natural-2'];

const keyList = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

const keyDict = {}

let highlightedKeyId;

for (let i = 0; i < keyList.length; i++) {
    keyDict[keyList[i]] = idList[i];
}

function playNote(id) {
    let audioId = document.getElementById(id+'-audio');
    audioId.load();
    audioId.play();
}

function highlightKey(id) {
    highlightedKeyId = id;
    document.getElementById(id).style.backgroundColor = 'darkgreen';
    document.getElementById(id).style.color = 'white';
}

function resetStyle(id) {
    document.getElementById(id).style.color = '';
    document.getElementById(id).style.backgroundColor = '';
}

function clickReset() {
    resetStyle(highlightedKeyId);
}

function keyReset(KeyBoardEvent) {
    let id = keyDict[KeyBoardEvent.key]
    if (id) {
        resetStyle(id);
    }
}

function clickKey(event) {
    let id = `${event.target.id}`;
    highlightKey(id);
    playNote(id);
}

function pressKey(KeyBoardEvent) {
    let id = keyDict[KeyBoardEvent.key];
    if (id){
        highlightKey(id);
        playNote(id);
    }
    
}

for (let el of idList) {
    document.getElementById(el).addEventListener('mousedown', clickKey);
    document.addEventListener('keypress', pressKey);
    document.addEventListener('mouseup', clickReset);
    document.addEventListener('keyup', keyReset);
}

