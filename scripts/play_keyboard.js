let c_1 = document.getElementById('c-natural-1');

const play_note = () => {
    let audio = new Audio('../style/media/audio/keyboard_tones/c_1.mp3');
    audio.play();
}

c_1.addEventListener("mousedown", play_note);
