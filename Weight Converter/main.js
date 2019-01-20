const input = document.getElementById('input');
const convert = document.getElementById('convart');
const warning = document.getElementById('warBox');


input.addEventListener('input', () => {
    convert.style.display = 'block';
    document.getElementById('gram').innerHTML = input.value * 1000;
    document.getElementById('tonne').innerHTML = input.value * 0.001;
    document.getElementById('kilogram').innerHTML = input.value;
    document.getElementById('miligram').innerHTML = input.value * 1e+6;
    document.getElementById('microgram').innerHTML = input.value * 1e+9;
    document.getElementById('pound').innerHTML = input.value * 2.20462;
});



// try {


// } catch (error) {
//     convert.style.display = 'block';
//     document.getElementById('gram').innerHTML = error;
// }