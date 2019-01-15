//GET THE MODAL ELEMENT
let modal = document.getElementById('simpleModal');
//GET OPEN MODAL BUTTON
let modalBtn = document.getElementById('modalBtn');
// GET CLOSE BUTTON
let closeBtn = document.getElementsByClassName('closeBtn')[0];


//LISTEN FOR OPEN CLICK
modalBtn.addEventListener('click', openModal);
//LISTEN FOR CLOSE CLICK
closeBtn.addEventListener('click', closeModal);
//LISTEN FOR OUTSIDE CLICK
window.addEventListener('click', clickOutside);

//FUNCTION TO OPEN MODAL
function openModal() {
    modal.style.display = 'block';
}

//FUNCTION TO CLOSE MODAL
function closeModal() {
    modal.style.display = 'none';
}
//FUNCTION TO CLOSE MODAL
function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}