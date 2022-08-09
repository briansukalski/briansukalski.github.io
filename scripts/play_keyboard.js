let audio_dict = {};

audio_dict['c-natural-1'] = 'c_1';
audio_dict['c-sharp'] = 'c_sharp_1';
audio_dict['d-natural'] = 'd_1';
audio_dict['d-sharp'] = 'd_sharp_1';
audio_dict['e-natural'] = 'e_1';
audio_dict['f-natural'] = 'f_1';
audio_dict['f-sharp'] = 'f_sharp_1';
audio_dict['g-natural'] = 'g_1';
audio_dict['g-sharp'] = 'g_sharp_1';
audio_dict['a-natural'] = 'a_1';
audio_dict['a-sharp'] = 'a_sharp_1';
audio_dict['b-natural'] = 'b_1';
audio_dict['c-natural-2'] = 'c_2';

function play_note(event) {
    let audio = new Audio(`../style/media/audio/keyboard_tones/${audio_dict[event.target.id]}.mp3`);
    audio.play();
}

for (let el in audio_dict) {
    document.getElementById(el).addEventListener('mousedown', play_note);
}
