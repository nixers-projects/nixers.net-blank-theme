/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var lightCol = [
    'rgb(66, 66, 66)', //textCol
    'rgb(244, 243, 242)', //backCol
    'rgb(2, 108, 177)', //linksCol
    'rgb(173, 203, 231)', //tableCol
    'rgb(224, 224, 224)', //bolCol
    'rgb(204, 204, 204)', //lightCol
    'rgb(251, 227, 228)', //alertCol
    'rgb(21, 160, 24)' //greenCol
]
var darkCol = [
    'rgb(102, 102, 102)',
    'rgb(20, 20, 20)',
    'rgb(99, 139, 131)',
    'rgb(33, 33, 33)',
    'rgb(27, 27, 27)',
    'rgb(125, 191, 184)',
    'rgb(251, 227, 228)',
    'rgb(21, 160, 24)'
]
if (typeof (Storage) !== 'undefined') {
    // Code for localStorage/sessionStorage.
    if (localStorage.nightMode) {
        if (localStorage.nightMode == 'on') {
            setNightMode();
        }
    } 
    else {
        localStorage.setItem('nightMode', 'off');
    }
} else {
    // Sorry! No Web Storage support..
}
function colorSwaper(from, to) {
    for (t in document.styleSheets[0].cssRules) {
        if (document.styleSheets[0].cssRules[t].cssText && document.styleSheets[0].cssRules[t].style && document.styleSheets[0].cssRules[t].cssText.indexOf(from) != - 1) {
            document.styleSheets[0].cssRules[t].style.cssText = document.styleSheets[0].cssRules[t].style.cssText.replace(from, to);
        }
    }
}
function setNightMode() {
    for (var i =0; i< darkCol.length; i++) {
       colorSwaper(lightCol[i], darkCol[i]);    
    }
}
function setDayMode() {
    for (var i =0; i< darkCol.length; i++) {
       colorSwaper(darkCol[i], lightCol[i]);    
    }
}
function toggleNightMode() {
    // Store
    if (localStorage.nightMode == 'off') {
        setDayMode();
        localStorage.setItem('nightMode', 'on');
    } 
    else {
        setNightMode();
        localStorage.setItem('nightMode', 'off');
    }
}
