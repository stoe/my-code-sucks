var ran = {
    'example-0': false
};

Reveal.addEventListener('exec-0', function () {
    'use strict';

    if (false === ran['example-0']) {
        console.group('Bad Example 1');
        console.log('' == '0');             // false
        console.log(0 == '');               // true
        console.log(0 == '0');              // true

        console.log(false == 'false');      // false
        console.log(false == '0');          // true

        console.log(false == undefined);    // false
        console.log(false == null);         // false
        console.log(null == undefined);     // true

        console.log(' \t\r\n ' == 0);       // true
        console.groupEnd();

        ran['example-0'] = true;
    }

}, false);
