// console.log(d3);


const DUMMY_DATA = [
    { id: 1, value: 10, region: 'usa' },
    { id: 2, value: 20, region: 'bd' },
    { id: 3, value: 15, region: 'uk' },
    { id: 4, value: 12, region: 'aus' },
];


// SELECTING ELEMENTS 
// https://github.com/d3/d3/blob/master/API.md#selections-d3-selection
// d3.select('div');
d3.select('.ddd') // Selects the first element that matches the specified selector string.
    .selectAll('p') // Selects all elements that match the specified selector string
    .data(DUMMY_DATA) // Binds the specified array of data with the selected elements, returning a new selection that represents the update selection
    .enter() // Returns the enter selection: placeholder nodes for each datum that had no corresponding DOM element in the selection
    .append('p') // If the specified type is a string, appends a new element of this type (tag name) as the last child of each selected element, or before the next following sibling in the update selection if this is an enter selection. 
    .text(dta => dta.region) // If a value is specified, sets the text content to the specified value on all selected elements, replacing any existing child elements. 


const barChart = d3.select('.bar-chart')
    .style('border', '1px solid rgb(94, 82, 255)') // Returns the value of the style property with the specified name for the specified node. 
    .classed("alert alert-primary", true) // If a value is specified, assigns or unassigns the specified CSS class names on the selected elements by setting the class attribute or modifying the classList property and returns this selection.

const barts = barChart
    .selectAll('div')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 10) + "px");





// https://github.com/d3/d3-scale
const xScale = d3
    .scaleBand() // Constructs a new band scale with the specified domain and range, no padding, no rounding and center alignment.
    .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))
    .rangeRound([0, 250]) // Sets the scale’s range to the specified two-element array of numbers while also enabling rounding. 
    .padding(0.1); // A convenience method for setting the inner and outer padding to the same padding value. If padding is not specified, returns the inner padding.
const yScale = d3
    .scaleLinear() //Constructs a new continuous scale with the specified domain and range, the default interpolator and clamping disabled.
    .domain([0, 22]) // If domain is specified, sets the scale’s domain to the specified array of numbers. The array must contain two or more elements.
    .range([250, 0]) // If range is specified, sets the scale’s range to the specified array of values. The array must contain two or more elements. Unlike the domain, elements in the given array need not be numbers




const svgChart = d3.select('svg')
    .classed('alert alert-primary border border-primary', true)


const svgBarChart = svgChart
    .selectAll('.svg-bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('svg-bar', true)
    .attr('width', xScale.bandwidth())  // Returns the width of each band.
    .attr('height', data => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));