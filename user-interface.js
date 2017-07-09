(function (calculator) {
  'use strict';

  var PadMap = {
    '1': {id: 'pad1', action: 'setDisplay'},
    '2': {id: 'pad2', action: 'setDisplay'},
    '3': {id: 'pad3', action: 'setDisplay'},
    '4': {id: 'pad4', action: 'setDisplay'},
    '5': {id: 'pad5', action: 'setDisplay'},
    '6': {id: 'pad6', action: 'setDisplay'},
    '7': {id: 'pad7', action: 'setDisplay'},
    '8': {id: 'pad8', action: 'setDisplay'},
    '9': {id: 'pad9', action: 'setDisplay'},
    '0': {id: 'pad0', action: 'setDisplay'},
    '.': {id: 'padpoint', action: 'setPoint'},
    '=': {id: 'pad=', action: 'calculate'},
    '+': {id: 'pad+', action: 'add'},
    '-': {id: 'pad-', action: 'substract'},
    '*': {id: 'pad*', action: 'multiply'},
    '/': {id: 'pad/', action: 'divide'},
    'C': {id: 'padc', action: 'reset'},
  };

  var displayElement = document.getElementById('display');

  function addOnClickEventListener(key) {
    var padKey = document.getElementById(PadMap[key].id);
    var action = calculator[PadMap[key].action].bind(calculator);
    if (!!!padKey) { return; }
    padKey.addEventListener('click', function(){
      action(key);
      displayElement.value = calculator.display;
    });
  }

  for (var padText in PadMap) {
    addOnClickEventListener(padText);
  }

  // Disallow input numbers directly on the textbox.
  displayElement.addEventListener('keydown', function (event) {
    event.preventDefault();
  });
  displayElement.value = calculator.display;
})(window.Calculator)
