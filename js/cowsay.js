'use strict';

/*
TODO:
expand text box according to content
allow editing of the text once it has been loaded from query string
use a template format that is more clear to read
*/

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
