let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;


//CLEAR ALL IMAGES
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}


//INITIAL SLIDER
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}
//SHOW PREVIOUS
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
//SHOW NEXT
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

//LEFT ARROW CLICK
arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
//RIGHT ARROW CLICK
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
startSlide();