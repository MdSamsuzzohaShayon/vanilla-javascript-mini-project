const pera = document.querySelectorAll('.pera');
const all_box = document.querySelectorAll('.box');




const left_arrow = document.getElementById('left');
const right_arrow = document.getElementById('right');


let current = 0;






function slideAnimation() {
    all_box.forEach(box => box.style.display = 'none');

    function slideTiming() {
        setTimeout(() => {
            all_box[current].style.display = 'block';
            pera.forEach(p => p.classList.add('txt-animate'));
            console.log('current from first slide before increase : ' + current);
            current++;
            console.log('current from first slide after increase : ' + current);
        }, 0);
        setTimeout(() => {
            all_box[current - 1].style.display = 'none';
            all_box[current].style.display = 'block';
            pera.forEach(p => p.classList.add('txt-animate'));
            console.log('current from second slide before increase : ' + current);
            current++;
            console.log('current from second slide after increase : ' + current);
        }, 5500);
        setTimeout(() => {
            all_box[current - 1].style.display = 'none';
            all_box[current].style.display = 'block';
            pera.forEach(p => p.classList.add('txt-animate'));
            console.log('current from third slide before increase : ' + current);
            current++;
            console.log('current from third slide after increase : ' + current);
        }, 11000);
        current = 0;
        all_box.forEach(box => box.style.display = 'none');
    }
    setInterval(slideTiming, 16500);
    slideTiming();


}


slideAnimation();

