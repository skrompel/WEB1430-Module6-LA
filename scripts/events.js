const P = document.querySelector('p');
const BUTTON = document.querySelector('button');

// Function to modify the text content of the paragraph
const CHANGETEXT = () => {
    P.textContent = "I changed because of an event listener"
}

// Add an Event Handler as a property of button element
// Event Handler = Handled in the JS; Event Listener = Listening in the HTML

const ALERTTEXT = () => {
    alert('Will I alert?');
}

// Events can be overwritten
// BUTTON.onclick = CHANGETEXT;
// BUTTON.onclick = ALERTTEXT;

// Listen for the click event
BUTTON.addEventListener('click', CHANGETEXT);

// Multiple event listeners can be added
// Handlers are overwritten, but listeners are not
BUTTON.addEventListener('click', ALERTTEXT);

// Remove alert function from the button
BUTTON.removeEventListener('click', ALERTTEXT);