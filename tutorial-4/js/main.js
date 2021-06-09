// https://www.youtube.com/watch?v=aHJCt2adSWA&list=PL55RiY5tL51r1NlkJLzVhui1S480gnuNG&index=3
// console.log(d3);
// https://www.tutorialsteacher.com/d3js/dom-manipulation-using-d3js

const DUMMY_DATA = [
    { id: 1, value: 10, region: 'usa' },
    { id: 2, value: 20, region: 'bd' },
    { id: 3, value: 15, region: 'uk' },
    { id: 4, value: 12, region: 'aus' },
];


const MARGINS = { top: 20, bottom: 10 }
const CHART_WIDTH = 600, CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;
const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1),
    y = d3.scaleLinear().range([CHART_HEIGHT, 0])

// SELECTING SVG TAG AND SET HEIGHT WIDTH 
const chartContainer = d3.select('svg')
    .attr('width', CHART_WIDTH)
    .attr("height", CHART_HEIGHT + MARGINS.top + MARGINS.bottom);



x.domain(DUMMY_DATA.map(d => d.region));
y.domain([0, d3.max(DUMMY_DATA, d => d.value) + 3]);


const chart = chartContainer.append('g');

// CREATING AXIS 
chart.append('g')
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .attr('transform', `translate(0, ${CHART_HEIGHT })`)
    .attr('color', "4foo9e")


// CREATING REACTANGLE FOR CHART 
chart.selectAll(".bar")
    .data(DUMMY_DATA)
    .enter()
    .append("rect")
    .classed('bar', true)
    .attr('width', x.bandwidth())
    .attr('height', data => CHART_HEIGHT - y(data.value))
    .attr('x', data => x(data.region))
    .attr('y', data => y(data.value));


// CREATING LABELS FOR ALL BAR 
chart.selectAll('.label')
    .data(DUMMY_DATA)
    .enter()
    .append('text')
    .text(data => data.value)
    .attr('x', data => x(data.region) + x.bandwidth() / 2)
    .attr('y', data => y(data.value) - 20)
    .attr('text-anchor', 'middle')
    .classed('label', true);