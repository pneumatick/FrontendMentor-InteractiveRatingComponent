const ratingNumbers = [...document.querySelectorAll(".rating-number")];

let rating = 0;

function selectRating(event) {
    rating = event.target.innerHTML;
}

ratingNumbers.forEach(number => {
    number.addEventListener('focus', selectRating);
});