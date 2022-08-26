const gridDict = {1: "11", 2: "12", 3: "13", 4: "14", 5: "21", 6: "22", 7: "23", 8: "24", 9: "31", 10: "32", 11: "33", 12: "34", 13: "41", 14: "42", 15: "43", 16: "44"};

function pressKey() {
    let newLocation = Math.ceil(Math.random() * 16);
    document.getElementById(gridDict[newLocation]).innerHTML = "2";
}

document.addEventListener('keypress', pressKey);