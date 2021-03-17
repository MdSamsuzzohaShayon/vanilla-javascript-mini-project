console.log("Hello world");
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');



draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        // console.log('Drag Start');
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });


});


containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        // console.log("drag over- Web we are inside container");
        const afterElement = getDragAfterElement(container, e.clientY);
        console.log(afterElement);
        const draggable = document.querySelector('.dragging');
        // PUT THE ELEMENT AT THE VERY BOTTOM 
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            // PUT THE ELEMENT AFTER SOME SPECIFIC ELEMENT 
            container.insertBefore(draggable, afterElement);
        }
    });
});




function getDragAfterElement(container, y) {
    // not(.dragging) = THIS MEANS THE CURRENT ELEMENT WE ARE DRAGGING THAT NOT 
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    // RETURN WHATEVER THE MOUSE CURSER IS DIRECTLY ABOVE 
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        // console.log("Box: ", box);
        // DISTANCE OF CENTER OF THE BOX AND ACTUAL MOUSE CURSER 
        const offset = y - box.top - box.height / 2;
        // console.log("Offset: ", offset);
        // FIND WHICH ELEMENT IS CLOSEST TO 0 
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest;
        }
        // Number.POSITIVE_INFINITY = LARGEST NUMBER POSSIBLE, EVERY SINGLE NUMBER WILL BE SMALLER THAN THAT, 
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


// function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

//     return draggableElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2
//         if (offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child }
//         } else {
//             return closest
//         }
//     }, { offset: Number.NEGATIVE_INFINITY }).element
// }