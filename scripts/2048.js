const gridArray = ['11', '12', '13', '14', '21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44'];
const gridRows = [['11', '12', '13', '14'], ['21', '22', '23', '24'], ['31', '32', '33', '34'], ['41', '42', '43', '44']];
const gridCols = [['11', '21', '31', '41'], ['12', '22', '32', '42'], ['13', '23', '33', '43'], ['14', '24', '34', '44']];

const acceptedInput = ['a', 'A', 's', 'S', 'd', 'D', 'w', 'W'];

let blankSquares = [];

let score = 0;
document.getElementById('score').innerHTML = score;

function moveTiles(direction) {
    if (direction === 'right') {
        for (let el of gridRows) {
            for (let i = 2; i >= 0; i--) {
                for (let j = i + 1; j <= 3; j++){
                    if (document.getElementById(el[j]).innerHTML === '') {
                        document.getElementById(el[j]).innerHTML = document.getElementById(el[i]).innerHTML;
                        document.getElementById(el[i]).innerHTML = '';
                    }
                }
            }
        }
        blankSquares = gridArray.filter(id => document.getElementById(id).innerHTML === '');
        console.log(blankSquares);
    }
}

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
    console.log(blankSquares);
    if (blankSquares.length < 1) {
        setTimeout(() => {
            alert(`Game Over! You scored ${score} points.`);
            document.removeEventListener('keypress', pressKey);
        }, 500);
    }
}

function pressKey(KeyBoardEvent) {
    let id = KeyBoardEvent.key;
        if (acceptedInput.includes(id)) {
            moveTiles('right');
            insertNewNumber();
        }
}

function startGame() {
    blankSquares = gridArray.slice();
    score = 0;
    blankSquares.forEach(id => document.getElementById(id).innerHTML = '');
    insertNewNumber();
    document.addEventListener('keypress', pressKey);
    document.getElementById('start').innerHTML = 'Start Over';
}

document.getElementById('start').addEventListener('click', startGame);