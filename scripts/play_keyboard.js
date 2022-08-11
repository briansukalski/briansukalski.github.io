const id_list = ['c-natural-1', 'c-sharp', 'd-natural', 'd-sharp', 'e-natural', 'f-natural', 'f-sharp', 'g-natural', 'g-sharp', 'a-natural', 'a-sharp', 'b-natural', 'c-natural-2'];

const key_list = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];

const key_dict = {}



for (let i = 0; i < key_list.length; i++) {
    key_dict[key_list[i]] = id_list[i] + '-audio';
}

function play_note(id) {
    document.getElementById(id).load();
    document.getElementById(id).play();
}

function click_key(event) {
    let id = `${event.target.id}-audio`;
    play_note(id);
}

function press_key(KeyBoardEvent) {
    let id = key_dict[KeyBoardEvent.key];
    if (id){
        play_note(id);
    }
    
}

for (let el of id_list) {
    document.getElementById(el).addEventListener('mousedown', click_key);
    document.addEventListener('keypress', press_key);
}

