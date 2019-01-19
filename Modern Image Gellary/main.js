// const current = document.querySelector('#current');
//QUERYSELECTORALL RETURNS NODE LIST 
// const imgs = document.querySelectorAll('.imgs img');

let opacity = 0.4;

//LONG FORM
/*imgs.forEach(img => img.addEventListener('click', imgClick));
function imgClick(e){
    current.src = e.target.src;
}*/





//SHORT FORM
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];


imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', e => {
    //RESET OPACITY FOR ALL IMAGES
    imgs.forEach(img => {
        img.style.opacity = 1;
    })
    //CHANGE CURRENT IMAGE TO SRC OF CLICKED IMAGE
    current.src = e.target.src
    //ADD FADE CLASS
    current.classList.add('fade-in');

    //REMOVE FADE-IN CLASS AFTER .5 SECOND
    setTimeout(() => {
        current.classList.remove('fade-in'), 500
    });

    //CHANGE THE OPACITY TO OPACITY VAR
    e.target.style.opacity = opacity;
}));