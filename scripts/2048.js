const gridArray = ['11', '12', '13', '14', '21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43', '44'];
const gridMoveRight = [['11', '12', '13', '14'], ['21', '22', '23', '24'], ['31', '32', '33', '34'], ['41', '42', '43', '44']];
const gridMoveLeft = [['14', '13', '12', '11'], ['24', '23', '22', '21'], ['34', '33', '32', '31'], ['44', '43', '42', '41']];
const gridMoveDown = [['11', '21', '31', '41'], ['12', '22', '32', '42'], ['13', '23', '33', '43'], ['14', '24', '34', '44']];
const gridMoveUp = [['41', '31', '21', '11'], ['42', '32', '22', '12'], ['43', '33', '23', '13'], ['44', '34', '24', '14']];

const valueColors = {'': '#E0E0E0', 2: '#FFCCCC', 4: '#FFCC99', 8: '#FF9933', 16: '#FF8000', 32: '#FF6666', 64: '#CC0000', 128: '#FFFF00', 256: '#999900', 512: '#666600', 1024: '#00FF00', 2048: '#009900', 4096: '#0000CC', 8192: '#000066'};
const acceptedInput = ['a', 'A', 's', 'S', 'd', 'D', 'w', 'W'];

let blankSquares = [];

let score = 0;
document.getElementById('score').innerHTML = score;

function moveTiles(grid) {
    // Start by moving all numbers through blank tiles as far as they can go to the right before hitting another number
    let moved = false;
    for (let el of grid) {
        for (let i = 2; i >= 0; i--) {
            let j = i + 1;
            while (j < 4) {
                if (document.getElementById(el[j]).innerHTML === '') {
                    j++;
                } else {
                    break;
                }
            }
            j--;
            if (j !== i && document.getElementById(el[i]).innerHTML !== '') {
                document.getElementById(el[j]).innerHTML = document.getElementById(el[i]).innerHTML;
                document.getElementById(el[i]).innerHTML = '';
                moved = true;
            }
        }
    }
    // Then, combine like numbers into larger numbers, keeping track of the score impact in the scoreToAdd variable
    for (let el of grid) {
        for (let i = 3; i > 0; i--) {
            if (document.getElementById(el[i -1]).innerHTML === document.getElementById(el[i]).innerHTML && document.getElementById(el[i]).innerHTML !== '') {
                document.getElementById(el[i]).innerHTML *= 2;
                score += parseInt(document.getElementById(el[i]).innerHTML);
                document.getElementById(el[i - 1]).innerHTML = '';
                moved = true;
                for (let j = i - 1; j >= 1; j--) {
                    document.getElementById(el[j]).innerHTML = document.getElementById(el[j - 1]).innerHTML;
                    document.getElementById(el[j - 1]).innerHTML = '';
                }
            }
        }
    }

    blankSquares = gridArray.filter(id => document.getElementById(id).innerHTML === '');
    return moved;
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
    document.getElementById('score').innerHTML = score;
    blankSquares.splice(newLocationIdx, 1);
    console.log(blankSquares);
}

function checkGameStatus() {
    let continueGame = false;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            //Check for any blanks or any adjacent grid cells with the same value
            if (document.getElementById(gridMoveRight[i][j]).innerHTML === '') {
                continueGame = true;
                return continueGame;
            }
            //Compare grid element to next element in same column
            if (i < 3) {
                if (document.getElementById(gridMoveRight[i][j]).innerHTML === document.getElementById(gridMoveRight[i + 1][j]).innerHTML) {
                    continueGame = true;
                    return continueGame;
                }
            }
            //Compare grid element to next element in same row
            if (j < 3) {
                if (document.getElementById(gridMoveRight[i][j]).innerHTML === document.getElementById(gridMoveRight[i][j + 1]).innerHTML) {
                    continueGame = true;
                    return continueGame;
                }
            }
        }
    }
    return continueGame;
}

function pressKey(KeyBoardEvent) {
    let id = KeyBoardEvent.key;
    let moved;
        if (acceptedInput.includes(id)) {
            if (id === 'd' || id === 'D') {
                moved = moveTiles(gridMoveRight);
            }
            if (id === 'a' || id === 'A') {
                moved = moveTiles(gridMoveLeft);
            }
            if (id === 's' || id === 'S') {
                moved = moveTiles(gridMoveDown);
            }
            if (id === 'w' || id === 'W') {
                moved = moveTiles(gridMoveUp);
            }
            if (moved === true) {
                insertNewNumber();
                colorGrid();
                if (checkGameStatus() === false) {
                    setTimeout(() => {
                        alert(`Game Over! You scored ${score} points.`);
                        document.removeEventListener('keypress', pressKey);
                    }, 0);
                }
            }
        }
}

function colorGrid() {
    for (let id of gridArray) {
        if (document.getElementById(id).innerHTML in valueColors) {
            document.getElementById(id).style.backgroundColor = valueColors[document.getElementById(id).innerHTML];
        } else {
            document.getElementById(id).style.backgroundColor = '#CCCC00';
        }
    }
}

function startGame() {
    blankSquares = gridArray.slice();
    score = 0;
    blankSquares.forEach(id => document.getElementById(id).innerHTML = '');
    insertNewNumber();
    colorGrid();
    document.addEventListener('keypress', pressKey);
    document.getElementById('start').innerHTML = 'Start Over';
}

document.getElementById('start').addEventListener('click', startGame);