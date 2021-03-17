const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//FILL LISTENER
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//LOOP THOUGHE MPTIES AND CALL DRUG EVENTS
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//DRAG FUNCTIONS
function dragStart() {
    // console.log('start');
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    console.log('end');
    this.className = 'fill';
}




function dragOver(e) {
    e.preventDefault();
    console.log('Over');
}

function dragEnter(e) {
    e.preventDefault();
    console.log('Enter');
    this.className += ' hovered';
}

function dragLeave(e) {
    e.preventDefault();
    console.log('Leave');
    this.className = 'empty';
}

function dragDrop(e) {
    e.preventDefault();
    console.log('Drop');
    this.className = 'empty';
    this.append(fill);
}