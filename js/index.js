function input(value) {
    document.querySelector('#output').value += value;
}

function remove() {
    document.querySelector('#output').value = '';
}

function equal() {
    document.querySelector('#output').value = eval(document.querySelector('#output').value);
}


