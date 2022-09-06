const gridArray = ['11', '12', '13', '14', '21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44'];

const acceptedInput = ['a', 'A', 's', 'S', 'd', 'D', 'w', 'W'];

let blankSquares = [];

let score = 0;
document.getElementById('score').innerHTML = score;

function insertNewNumber() {
    let newTileScore;
    let newLocationIdx = Math.floor(Math.random() * blankSquares.length);
    let randNum = Math.random();
    if (randNum < .75) {
        newTileScore = 2;
    } else {
        newTileScore = 4;
    }
    document.getElementById(blankSquares[newLocationIdx]).innerHTML = newTileScore;
    score += newTileScore;
    document.getElementById('score').innerHTML = score;
    blankSquares.splice(newLocationIdx, 1);
}

function pressKey(KeyBoardEvent) {
    let id = KeyBoardEvent.key;
        if (acceptedInput.includes(id)) {
            insertNewNumber();
        }
}

function startGame() {
    blankSquares = gridArray.slice();
    insertNewNumber();
    document.addEventListener('keypress', pressKey);
    document.getElementById('start').removeEventListener('click', startGame);
}

document.getElementById('start').addEventListener('click', startGame);