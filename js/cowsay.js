'use strict';

/*
when browsers support it, these can be used, or bother putting in babel:
https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

(function() {
    window.addEventListener('load', function (ev) {
        var cow = document.getElementById('cow');

        var pairs = decodeURI(window.location.search).substr(1).split('&');
        var args = {};

        var i = pairs.length;
        while (i--) {
            // arg may be named (e.g. foo=bar)
            // or unnamed and will become the `defaultArg`
            var arg = pairs[i].split('=');
            if (arg.length === 2) {
                args[arg[0]] = arg[1];
            } else if (arg.length === 1) {
                args.defaultArg = arg[0];
            } else {
                console.error('Query string invalid.');
            }
        }

        var superCowPowers = args['apt-get'] === 'moo';

        var defaultSay = 'Moo!';

        if (superCowPowers) {
            defaultSay = 'Have you mooed today?';
        }

        var say = args.defaultArg || args.say || defaultSay;
        // TODO support alias `e`
        var eyes = args.eyes || 'oo';


        var cowsay = (
            ' ______\n' +
            '< ' + say + ' >\n' +
            ' ------\n' +
            '        \\   ^__^\n' +
            '         \\  (' + eyes + ')\\_______\n' +
            '            (__)\\       )\\/\\\n' +
            '                ||----w |\n' +
            '                ||     ||\n'
        );

        var aptGetMoo = (
            '                 (__) \n' +
            '                 (' + eyes + ') \n' +
            '           /------\\/ \n' +
            '          / |    ||   \n' +
            '         *  /\\---/\\ \n' +
            '            ~~   ~~   \n' +
            '..."' + say + '"...\n'
        );

        cow.innerText = superCowPowers ? aptGetMoo : cowsay;

    });
})();


