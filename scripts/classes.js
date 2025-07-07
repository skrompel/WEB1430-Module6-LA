// Select the first div
const DIV = document.querySelector('div');

// Assign the warning class to the first div
DIV.className = 'warning';

// Select the second div by class name
const ACTIVEDIV = document.querySelector('.active');

ACTIVEDIV.classList.add('hidden'); // Add hidden class
ACTIVEDIV.classList.remove('hidden'); // Remove hidden class

ACTIVEDIV.classList.toggle('hidden');

ACTIVEDIV.classList.remove('hidden');
ACTIVEDIV.classList.replace('active', 'warning');