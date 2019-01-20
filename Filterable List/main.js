// /GET INPUT ELEMENT
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //GET VALUE OF INPUT
    let filterValue = filterInput.value.toUpperCase();
    //GET NAMES UL
    let ul = document.getElementById('names');
    //GET LI FROM UL
    let li = ul.querySelectorAll('li.collection-item');

    li.forEach(i => {
        let a = i.getElementsByTagName('a')[0];
        //IF MATCHED
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            i.style.display = '';
        }else{
            i.style.display = 'none';
        }
    });
}