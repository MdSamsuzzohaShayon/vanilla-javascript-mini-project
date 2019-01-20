const ratings = {
    //INITIAL RATING
    avenger: 2.9,
    aquaman: 5,
    harry_potter: 4.4,
    avater: 3.6,
    pirate: 3.1
}

//TOTAL STARS
const starsTotal = 5;

//RUN GETRATING WHEN DOM LOADS
document.addEventListener('DOMContentLoaded', getRatings);

//FORM ELEMENTS
const productSelect = document.getElementById('movie-select');
const ratingControl = document.getElementById('rating-control');

//INIT MOVIES
let movies;

//PRODUCT SELECT CHANGE
productSelect.addEventListener('change', (e)=>{
    movies = e.target.value;
    console.log(movies);
    //ENABLE RATING CONTROL
    ratingControl.disabled = false;
    ratingControl.value = ratings[movies];
});

//RATING CONTROL CHANGE
ratingControl.addEventListener('blur', (e)=>{
    const rating = e.target.value;

    //MAKE SURE 5 OR UNDER
    if(rating > 5){
        alert('Please rate 1-5');
        return;
    }

    //CHANGE RATING
    ratings[movies] = rating;
    getRatings();
})


//GET RATINGS
function getRatings() {
    console.log('run');
    for (let rating in ratings) {
        //GETTING THE KEYS
        console.log(rating);
        //GETTING THE VALUES       
        console.log(ratings[rating]);
        //GET PERCENTAGE
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        console.log("Star Percentage: " + starPercentage + "%");
        const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;
        console.log("Star Percentage: " + starPercentageRounded);

        //SET WIDTH OF STAR-INNER TO PERCENTAGE
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        //ADD NUMBER RATING
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];

    }
}