const ratingPanel = document.getElementById('rating-panel');
const submissionMessage = document.getElementById('submission-message');
const ratingNumbers = [...document.querySelectorAll(".rating-number")];
const submitButton = document.getElementById('submit-button');
const bluishGrey = '#353e47';
const lightGrey = 'hsl(217, 12%, 63%)';
const white = 'hsl(0, 0%, 100%)';
const orange = 'hsl(25, 97%, 53%)';

let previousSelection = null;
let rating = 0;

function inactive(event) {
    if (event.target !== previousSelection) {
        event.target.style.backgroundColor = bluishGrey;
        event.target.style.color = lightGrey;
    }
}

function highlight(event) {
    if (event.target !== previousSelection) {
        event.target.style.backgroundColor = lightGrey;
        event.target.style.color = white;
    }
}

function selectRating(event) {
    if (previousSelection) {
        previousSelection.style.backgroundColor = bluishGrey;
        previousSelection.style.color = lightGrey;
    }
    event.target.style.backgroundColor = orange;
    event.target.style.color = white;
    rating = event.target.innerHTML;
    previousSelection = event.target;
}

function submitRating(event) {
    ratingPanel.style.display = 'none';
    submissionMessage.style.display = 'flex';
}

ratingNumbers.forEach(number => {
    number.addEventListener('focus', selectRating);
    number.addEventListener('mouseover', highlight);
    number.addEventListener('mouseout', inactive);
});
submitButton.addEventListener('mouseup', submitRating);