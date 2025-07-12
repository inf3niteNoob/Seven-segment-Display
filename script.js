// Displays

"use strict"

var display1 = {
    t: 0, // top
    tl: 0, // top left
    tr: 0, // top right
    m: 0, // middle
    bl: 0, // bottom left
    br: 0, // bottom right
    b: 0, // bottom
}

// Functions

const setDisplay = (display, num) => {


    const functions = [

        function zero(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 1
            getDisplay.tr = 1
            getDisplay.m = 0
            getDisplay.bl = 1
            getDisplay.br = 1
            getDisplay.b = 1
        },


        function one(getDisplay) {
            getDisplay.t = 0
            getDisplay.tl = 0
            getDisplay.tr = 1
            getDisplay.m = 0
            getDisplay.bl = 0
            getDisplay.br = 1
            getDisplay.b = 0
        },

        function two(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 0
            getDisplay.tr = 1
            getDisplay.m = 1
            getDisplay.bl = 1
            getDisplay.br = 0
            getDisplay.b = 1
        },

        function three(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 0
            getDisplay.tr = 1
            getDisplay.m = 1
            getDisplay.bl = 0
            getDisplay.br = 1
            getDisplay.b = 1
        },

        function four(getDisplay) {
            getDisplay.t = 0
            getDisplay.tl = 1
            getDisplay.tr = 1
            getDisplay.m = 1
            getDisplay.bl = 0
            getDisplay.br = 1
            getDisplay.b = 0
        },

        function five(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 1
            getDisplay.tr = 0
            getDisplay.m = 1
            getDisplay.bl = 0
            getDisplay.br = 1
            getDisplay.b = 1
        },

        function six(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 1
            getDisplay.tr = 0
            getDisplay.m = 1
            getDisplay.bl = 1
            getDisplay.br = 1
            getDisplay.b = 1
        },

        function seven(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 0
            getDisplay.tr = 1
            getDisplay.m = 0
            getDisplay.bl = 0
            getDisplay.br = 1
            getDisplay.b = 0
        },

        function eight(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 1
            getDisplay.tr = 1
            getDisplay.m = 1
            getDisplay.bl = 1
            getDisplay.br = 1
            getDisplay.b = 1
        },

        function nine(getDisplay) {
            getDisplay.t = 1
            getDisplay.tl = 1
            getDisplay.tr = 1
            getDisplay.m = 1
            getDisplay.bl = 0
            getDisplay.br = 1
            getDisplay.b = 0
        },


    ]

    var choosen = functions[num]
    choosen(display)
}

function getDisplay(display) {
    const patterns = [
        { t: 1, tl: 1, tr: 1, m: 0, bl: 1, br: 1, b: 1 }, // 0
        { t: 0, tl: 0, tr: 1, m: 0, bl: 0, br: 1, b: 0 }, // 1
        { t: 1, tl: 0, tr: 1, m: 1, bl: 1, br: 0, b: 1 }, // 2
        { t: 1, tl: 0, tr: 1, m: 1, bl: 0, br: 1, b: 1 }, // 3
        { t: 0, tl: 1, tr: 1, m: 1, bl: 0, br: 1, b: 0 }, // 4
        { t: 1, tl: 1, tr: 0, m: 1, bl: 0, br: 1, b: 1 }, // 5
        { t: 1, tl: 1, tr: 0, m: 1, bl: 1, br: 1, b: 1 }, // 6
        { t: 1, tl: 0, tr: 1, m: 0, bl: 0, br: 1, b: 0 }, // 7
        { t: 1, tl: 1, tr: 1, m: 1, bl: 1, br: 1, b: 1 }, // 8
        { t: 1, tl: 1, tr: 1, m: 1, bl: 0, br: 1, b: 0 }, // 9
    ];
    for (let i = 0; i < patterns.length; i++) {
        let match = true;
        for (const key in patterns[i]) {
            const val = display[key];
            const patternVal = patterns[i][key];
            if (
                !(
                    (val === patternVal) ||
                    (val === true && patternVal === 1) ||
                    (val === false && patternVal === 0)
                )
            ) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }
    return null;
}

function customSetDisplay(display, t, tl, tr, m, bl, br, b) {
    display.t = t;
    display.tl = tl;
    display.tr = tr;
    display.m = m;
    display.bl = bl;
    display.br = br;
    display.b = b;
}

const convertDisplay = (display, reverse) => {
    if (!reverse) {
        for (const key in display) {
            if (display[key] === 0) {
                display[key] = false
            } else if (display[key] === 1) {
                display[key] = true
            } else {
                console.error(`Unknown Instance in ${display}/${key}`)
            }
        }
    } else {
        for (const key in display) {
            if (display[key] === false) {
                display[key] = 0
            } else if (display[key] === true) {
                display[key] = 1
            } else {
                console.error(`Unknown Instance in ${display}/${key}`)
            }
        }
    }
}

function renderDisplay(display) {
    const keys = ['t', 'tl', 'tr', 'm', 'bl', 'br', 'b'];
    keys.forEach(key => {
        const segment = document.querySelector('.segment.' + key);
        if (!segment) return;
        if (display[key] === 1 || display[key] === true) {
            segment.classList.add('on');
        } else {
            segment.classList.remove('on');
        }
    });
}

// Logic






/* 

*/