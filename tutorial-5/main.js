// https://www.youtube.com/watch?v=gda35eYXBJc&t=2s
/*
const graph = {
  nodes: [{
      name: "John",
      age: 34
    },
    {
      name: "Tom",
      age: 34
    },
    {
      name: "Ronaldo",
      age: 24
    },
    {
      name: "Bruno",
      age: 27
    },
    {
      name: "Pogba",
      age: 28
    },
    {
      name: "Martial",
      age: 19
    },
    {
      name: "De Gea",
      age: 21
    },
    {
      name: "Rashford",
      age: 22
    },
  ],
  links: [{
      source: "John",   // NODES FIRST OBJECT NAME
      target: "Tom" // WANT TO LINK TO NODES SECONDS OBJECT NAME
    },
    {
      source: "John",
      target: "Ronaldo"
    },
    {
      source: "Ronaldo",
      target: "Bruno"
    },
    {
      source: "Ronaldo",
      target: "Pogba"
    },
    {
      source: "Bruno",
      target: "Martial"
    },
    {
      source: "Bruno",
      target: "De Gea"
    },
    {
      source: "Rashford",
      target: "Bruno"
    },
    {
      source: "Rashford",
      target: "Martial"
    },
  ]
}
*/
const canvas = d3.select("#network"),
  width = canvas.attr('width'),
  height = canvas.attr('height'),
  r = 5,
  color = d3.scaleOrdinal(d3.schemeCategory20),
  ctx = canvas.node() // Returns the first (non-null) element in this selection. If the selection is empty, returns null.
  .getContext('2d'); // The HTMLCanvasElement.getContext() method returns a drawing context on the canvas
const simulation = d3.forceSimulation() // Creates a new simulation with the specified array of nodes and no forces. If nodes is not specified, it defaults to the empty array. The simulator starts automatically;
  .force('x', d3.forceX(width / 2)) // If force is specified, assigns the force for the specified name and returns this simulation. If force is not specified, returns the force with the specified name, or undefined if there is no such force.
  .force('y', d3.forceY(height / 2)) // If force is specified, assigns the force for the specified name and returns this simulation. If force is not specified, returns the force with the specified name, or undefined if there is no such force.
  .force('collide', d3.forceCollide(r + 2)) // Creates a new circle collision force with the specified radius. If radius is not specified, it defaults to the constant one for all nodes.
  .force('charge', d3
    .forceManyBody() // Creates a new many-body force with the default parameters.
    .strength(-20) // If strength is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force.
  )
  .force('link', d3
    .forceLink() // Creates a new link force with the specified links and default parameters. If links is not specified, it defaults to the empty array.
    .id(d => d.name)
  );


// ASSIGN RANDOM D X POINT
// graph.nodes.forEach(d => {
//   d.x = Math.random() * width;
//   d.y = Math.random() * height;
// });


// LOAD JSON DATA

d3.json("data.json", (err, graph) => {
  if (err) throw err;
  simulation.nodes(graph.nodes)
    .on("tick", update) // tick - after each tick of the simulation’s internal timer. https://github.com/d3/d3-force/blob/v3.0.0/README.md#simulation_force
    // Each link is an object with the following properties - source, target, index
    // any link.source or link.target property which is not an object is replaced by an object reference to the corresponding node with the given identifier.
    // If the specified array of links is modified, such as when links are added to or removed from the simulation, this method must be called again with the new (or changed) array to notify the force of the change
    .force('link')
    .links(graph.links);



  function update() {
    // CLEAR THE WHOLE CANVAS
    ctx.clearRect(0, 0, width, height); // The CanvasRenderingContext2D.clearRect() method of the Canvas 2D API erases the pixels in a rectangular area by setting them to transparent black.

    ctx.beginPath(); // The CanvasRenderingContext2D.beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = "#aaa";
    graph.links.forEach(drawLink);
    ctx.stroke();

    ctx.globalAlpha = 1.0;
    graph.nodes.forEach(drawNode);
  }

});






function drawNode(d) {
  ctx.beginPath(); // The CanvasRenderingContext2D.beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
  ctx.fillStyle = color(d.party);
  ctx.moveTo(d.x, d.y); // Move to the specified point ⟨x, y⟩. Equivalent to context.moveTo and SVG’s “moveto” command.
  ctx.arc(d.x, d.y, r, 0, 2 * Math.PI); // Draws a circular arc segment with the specified center ⟨x, y⟩, radius, startAngle and endAngle.
  ctx.fill();
}


function drawLink(l) {
  ctx.moveTo(l.source.x, l.source.y); // Move to the specified point ⟨x, y⟩. Equivalent to context.moveTo and SVG’s “moveto” command.
  ctx.lineTo(l.target.x, l.target.y); // Draws a straight line from the current point to the specified point ⟨x, y⟩. Equivalent to context.lineTo and SVG’s “lineto” command.
}
