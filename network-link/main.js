const width = 640,
    height = 480;

// THERE IS TWO MAIN THINGS (LINKS AND NODES ), NODES ARE THE ROWS AND LINKS HAS SOURCE AND TARGET
const links = [
    { source: "Neymar", target: "Mbappe" },
    { source: "Neymar", target: "DiMaria" },
    { source: "Kimpembe", target: "DiMaria" },
    { source: "Kimpembe", target: "Maquinhos" },
    { source: "Maquinhos", target: "Navas" },
    { source: "Maquinhos", target: "Sarabia" },
];



const nodes = {};

// IF THESE ALREADY EXIST UPDATE THEM , OR 
// PARSE LINKS TO NODES 
links.forEach(link => {
    link.source = nodes[link.source] || (nodes[link.source] = { name: link.source });
    link.target = nodes[link.target] || (nodes[link.target] = { name: link.target });
});
console.log("Links: ", links);
// {
//     "source": {
//         "name": "Maquinhos"
//     },
//     "target": "Navas"
// }



// ADD SVG TO OUR BODY 
const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

const force = d3.forceSimulation()
    .size([width, height])
    .nodes(d3.values(nodes)) // DATASET
    .links(links)
    .on('tick', tick) // WHEN FORCE LAYOUT RENDER AND DO SOMETHING IN IT (DRAG, HOVER, CLICK)
    .linkdistance(300)
    .start();

const link = svg.selectAll('.link')
    .data(links)
    .enter()
    .append('line')
    .attr('class', 'link')


const node = svg.selectAll('.node')
    .data(force.nodes())
    .enter()
    .append('circle')
    .classed('node', true)
    .attr('r', width * 0.03);




function tick(e) {
    console.log("E - ", e);
    node.attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .call(force.drag)
}



