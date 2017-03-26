/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
textCol = 'rgb(66, 66, 66)';
backCol = 'rgb(244, 243, 242)';
linksCol = 'rgb(2, 108, 177)';
tableCol = 'rgb(173, 203, 231)';
bolCol = 'gb(224, 224, 224)';
lightCol = 'rgb(204, 204, 204)';
alertCol = 'rgb(251, 227, 228)';
greenCol = 'rgb(21, 160, 24)';
if (typeof (Storage) !== 'undefined') {
  // Code for localStorage/sessionStorage.
  if (localStorage.nightMode) {
    if (localStorage.nightMode == 'on'){
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
  colorSwaper(textCol, linksCol);
}
function setDayMode() {
}
function toggleNightMode() {
  // Store
  if (localStorage.nightMode == 'off') {
    setDayMode();
    localStorage.setItem('nightMode', 'on');
  } 
  else {
    localStorage.setItem('nightMode', 'off');
    setNightMode();
  }
}
