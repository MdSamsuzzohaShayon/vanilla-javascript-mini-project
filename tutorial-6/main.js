const svg = d3.select('svg');

const width = svg.attr('width');
const height = svg.attr('height');


const colorScale = d3.scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#c11d1d', '#eae600']);

const radiusScale = d3.scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range([50, 30]);


// RENDERING GRAPH 
const render = (selection, props) => {
    // console.log("Fruits", fruits); 
    const circles = selection.selectAll('circle')  // MAKE AN EMPTY SELECTION - SETTING UP ELEMENT
        .data(props.fruits); // CREATE DATA JOIN - IT HAS TO BE ARRAY

    circles.enter()
        .append('circle') // AN ELEMENT TO BE APPENDED FOR EACH AND EVERY ONE OF DATA ELEMENT THAT DON'T HAVE CORESPONDING DOM ELEMENT
        .attr('cx', (d, i) => i * 120 + 60)
        .attr('cy', height / 2)
        .attr('r', d => radiusScale(d.type))
        .attr('fill', d => colorScale(d.type));



    // UPDATE APP TO LEMON 
    circles
        .attr('r', d => radiusScale(d.type))
        .attr('fill', d => colorScale(d.type));



    circles
        .exit()
        .remove();
}


const makeFruit = type => ({ type });


// THIS IS THE DATA 
const fruits = d3
    .range(5) // Returns an array containing an arithmetic progression
    .map(() => makeFruit("Apple"));

render(svg, { fruits });




setTimeout(() => {
    // EAT AN APPLE 
    fruits.pop();
    render(svg, { fruits });
}, 1000);


setTimeout(() => {
    // REPLACE AN APPLE WITH LEMON
    fruits[2].type = "lemon";
    render(svg, { fruits });
}, 2000);