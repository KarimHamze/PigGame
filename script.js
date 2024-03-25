'use strict';

const dice = Math.trunc(Math.random() * 6);
const diceEl = document.querySelector('.dice');

const score0El = document.querySelector('#score---0');
const score1El = document.getElementById('score---1');

// Condiciones para empezar
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Ocultar dado
