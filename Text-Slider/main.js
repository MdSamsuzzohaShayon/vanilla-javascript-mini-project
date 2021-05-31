const pera = document.querySelectorAll('.pera');
const all_box = document.querySelectorAll('.box');


let current = 0;




function slideAnimation(){
    all_box.forEach(box => box.style.display = 'none');

    function slideTiming(){
        setTimeout(()=>{
            all_box[current].style.display = 'block';
            pera.forEach(p => p.classList.add('text-animate'));
            console.log(pera);
            console.log("Current from first slide before increase value of current " + current);
            current ++;
            console.log("Current from first slide after increase value of current " + current);
        }, 0);
        setTimeout(()=>{
            all_box[current - 1].style.display = 'none';
            all_box[current].style.display = 'block';
            pera.forEach(p => p.classList.add('text-animate'));
            console.log("Current from first slide before increase value of current " + current);
            current ++;
            console.log("Current from first slide after increase value of current " + current);
        }, 5500);

        setTimeout(()=>{
            all_box[current - 1].style.display = 'none';
            all_box[current].style.display = 'block';
            pera.forEach(p => p.classList.add('text-animate'));
            console.log("Current from first slide before increase value of current " + current);
            current ++;
            console.log("Current from first slide after increase value of current " + current);
        }, 11000);


        current = 0;
        all_box.forEach(box => box.style.display = 'none');

    }





    setInterval(slideTiming, 16500);
    
    // console.log(current);
    slideTiming();
}



slideAnimation();
