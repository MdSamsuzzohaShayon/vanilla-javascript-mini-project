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


    const bowl = selection
        .selectAll('rect')
        .data([null])
        .enter()
        .append('rect')
        .attr('y', 110)
        .attr('width', 920)
        .attr('height', 300)
        .attr('rx', 300 / 2)

    // GROUP 
    // console.log("Fruits", fruits); 
    const groups = selection.selectAll('g')  // MAKE AN EMPTY SELECTION - SETTING UP ELEMENT
        .data(props.fruits, d => d.id); // CREATE DATA JOIN - IT HAS TO BE ARRAY


    // ADDING DOM ELEMENT TO DATA 
    const groupsEnter = groups.enter()
        .append('g'); // AN ELEMENT TO BE APPENDED FOR EACH AND EVERY ONE OF DATA ELEMENT THAT DON'T HAVE CORESPONDING DOM ELEMENT

    groupsEnter
        .merge(groups) // UPDATE - TO CHANGE ANY ATTRIBUTE THAT NEED TO BE DECLARED AFTER MERGE -  Merges the specified iterable of iterables into a single array. This method is similar to the built-in array concat method; the only difference is that it is more convenient when you have an array of arrays.
        .attr('transform', (d, i) => (
            `translate(${i * 120 + 60}, ${props.height / 2})`
        ));

    // REMOVE DOM ELEMENT - DATA ELEMENT IS ALREADY REMOVED FROM BELOW FUNCTION 
    groups
        .exit()
        .attr('r', 0)
        .remove();




    // CIRCLE 
    // ADDING DOM ELEMENT TO DATA 
    groupsEnter
        .append('circle') // AN ELEMENT TO BE APPENDED FOR EACH AND EVERY ONE OF DATA ELEMENT THAT DON'T HAVE CORESPONDING DOM ELEMENT
        .merge(groups.select('circle')) // UPDATE - TO CHANGE ANY ATTRIBUTE THAT NEED TO BE DECLARED AFTER MERGE -  Merges the specified iterable of iterables into a single array. This method is similar to the built-in array concat method; the only difference is that it is more convenient when you have an array of arrays.
        .attr('r', d => radiusScale(d.type))
        .attr('fill', d => colorScale(d.type));


    // TEXT 
    groupsEnter
        .append('text') // AN ELEMENT TO BE APPENDED FOR EACH AND EVERY ONE OF DATA ELEMENT THAT DON'T HAVE CORESPONDING DOM ELEMENT
        .merge(groups.select('text')) // UPDATE - TO CHANGE ANY ATTRIBUTE THAT NEED TO BE DECLARED AFTER MERGE -  Merges the specified iterable of iterables into a single array. This method is similar to the built-in array concat method; the only difference is that it is more convenient when you have an array of arrays.
        .text(d => d.type)
        .attr('y', 80)


}

const makeFruit = type => ({ type, id: Math.random() });


// THIS IS THE DATA 
const fruits = d3
    .range(5) // Returns an array containing an arithmetic progression
    .map(() => makeFruit("Apple"));

// console.log("Fruits: ", fruits); // [{id: 0.1298450222714207, type: "Apple"}]


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