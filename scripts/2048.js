const gridDict = {1: '11', 2: '12', 3: '13', 4: '14', 5: '21', 6: '22', 7: '23', 8: '24', 9: '31', 10: '32', 11: '33', 12: '34', 13: '41', 14: '42', 15: '43', 16: '44'};

const acceptedInput = ['a', 'A', 's', 'S', 'd', 'D', 'w', 'W'];

let score = 0;
document.getElementById('score').innerHTML = score;

function pressKey(KeyBoardEvent) {
    let id = KeyBoardEvent.key;
        if (acceptedInput.includes(id)) {
            let newTileScore;
            let newLocation = Math.ceil(Math.random() * 16);
            let randNum = Math.random();
            if (randNum < .75) {
                newTileScore = 2;
            } else {
                newTileScore = 4;
            }
            document.getElementById(gridDict[newLocation]).innerHTML = newTileScore;
            score += newTileScore;
            document.getElementById('score').innerHTML = score;
        }
}

function startGame() {
    document.addEventListener('keypress', pressKey);
}

document.getElementById('start').addEventListener('click', startGame);