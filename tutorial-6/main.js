const svg = d3.select('svg');

// const width = svg.attr('width');
// const height = svg.attr('height');


const colorScale = d3.scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#c11d1d', '#eae600']);

const radiusScale = d3.scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range([50, 30]);


const xPosition = (d, i) => i * 120 + 60;


// RENDERING GRAPH 
const fruitBowl = (selection, props) => {

    // console.log("Fruits", fruits); 
    const circles = selection.selectAll('circle')  // MAKE AN EMPTY SELECTION - SETTING UP ELEMENT
        .data(props.fruits, d => d.id); // CREATE DATA JOIN - IT HAS TO BE ARRAY


    // ADDING DOM ELEMENT TO DATA 
    circles.enter()
        .append('circle') // AN ELEMENT TO BE APPENDED FOR EACH AND EVERY ONE OF DATA ELEMENT THAT DON'T HAVE CORESPONDING DOM ELEMENT
        .attr('cx', xPosition)
        .attr('cy', props.height / 2)
        .attr('r', 0)
        .merge(circles) // UPDATE - TO CHANGE ANY ATTRIBUTE THAT NEED TO BE DECLARED AFTER MERGE -  Merges the specified iterable of iterables into a single array. This method is similar to the built-in array concat method; the only difference is that it is more convenient when you have an array of arrays.
        .attr('fill', d => colorScale(d.type))
        // .transition()
        // .duration(1000)
        .attr('cx', xPosition)
        .attr('r', d => radiusScale(d.type));



    // UPDATE APP TO LEMON - ALTERNATIVLY WE CAN CALL MERGE
    // circles
    //     .attr('r', d => radiusScale(d.type))
    //     .attr('fill', d => colorScale(d.type));



    // REMOVE DOM ELEMENT - DATA ELEMENT IS ALREADY REMOVED FROM BELOW FUNCTION 
    circles
        .exit()
        // .transition()
        // .duration(1000)
        .attr('r', 0)
        .remove();









    const text = selection.selectAll('text')  // MAKE AN EMPTY SELECTION - SETTING UP ELEMENT
        .data(props.fruits); // CREATE DATA JOIN - IT HAS TO BE ARRAY


    // ADDING DOM ELEMENT TO DATA 
    text.enter()
        .append('text') // AN ELEMENT TO BE APPENDED FOR EACH AND EVERY ONE OF DATA ELEMENT THAT DON'T HAVE CORESPONDING DOM ELEMENT
        .attr('x', xPosition)
        .attr('y', props.height / 2 + 80)
        .merge(text) // UPDATE - TO CHANGE ANY ATTRIBUTE THAT NEED TO BE DECLARED AFTER MERGE -  Merges the specified iterable of iterables into a single array. This method is similar to the built-in array concat method; the only difference is that it is more convenient when you have an array of arrays.
        .text(d => d.type);


    // REMOVE DOM ELEMENT - DATA ELEMENT IS ALREADY REMOVED FROM BELOW FUNCTION 
    text
        .exit()
        .attr('r', 0)
        .remove();
}

const makeFruit = type => ({ type, id: Math.random() });


// THIS IS THE DATA 
const fruits = d3
    .range(5) // Returns an array containing an arithmetic progression
    .map(() => makeFruit("Apple"));


const render = () => {
    fruitBowl(svg, { fruits, height: svg.attr('height') });
}



render();




setTimeout(() => {
    // EAT AN APPLE 
    fruits.pop();
    render();
}, 1000);


setTimeout(() => {
    // REPLACE AN APPLE WITH LEMON
    fruits[2].type = "lemon";
    render();
}, 2000);



setTimeout(() => {
    // EAT AN APPLE 
    fruits.splice(1, 1);
    render();
}, 3000);