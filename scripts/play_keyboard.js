let id_list = ['c-natural-1', 'c-sharp', 'd-natural', 'd-sharp', 'e-natural', 'f-natural', 'f-sharp', 'g-natural', 'g-sharp', 'a-natural', 'a-sharp', 'b-natural', 'c-natural-2'];


function play_note(event) {
    document.getElementById(`${event.target.id}-audio`).load();
    document.getElementById(`${event.target.id}-audio`).play();
}

for (let el of id_list) {
    document.getElementById(el).addEventListener('mousedown', play_note);
}
