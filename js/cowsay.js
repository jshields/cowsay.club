'use strict';

window.addEventListener('load', function (ev) {
    var cow = document.getElementById('cow');
    var say = decodeURI(window.location.search.substr(1)) || 'Moo!';
    cow.innerText = (
        ' ______\n' +
        '< ' + say + ' >\n' +
        ' ------\n' +
        '        \\   ^__^\n' +
        '         \\  (oo)\\_______\n' +
        '            (__)\\       )\\/\\\n' +
        '                ||----w |\n' +
        '                ||     ||\n'
    );
});
