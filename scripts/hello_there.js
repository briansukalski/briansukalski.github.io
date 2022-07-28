function general_kenobi() {
    let image = document.getElementById('grievous');
    if (image.src === 'style/hello-there-general-kenobi.gif') {
        image.src = '';
    }
    else {
        image.src = 'style/hello-there-general-kenobi.gif'

    }
}