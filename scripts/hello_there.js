function general_kenobi() {
    let image = document.getElementById('grievous');
    if (image.style.visibility !== 'visible') {
        image.style.visibility = 'visible';
    }
    else {
        image.style.visibility = 'hidden';
    }
}