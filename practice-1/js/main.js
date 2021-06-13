/*
// https://observablehq.com/@d3/bubble-chart
let csvUrl = "http://gist.githubusercontent.com/MdSamsuzzohaShayon/3975198a9b0abcae4e84199334cf0ebc/raw/city-list.csv";

const fetchText = async () => {
  const response = await fetch(csvUrl, { method: "GET" });




  const text = await response.text();
  const fetchObj = await d3.csvParse(text);

  fetchObj.forEach((obj, i) => obj.ID = parseInt(obj.ID));
  return fetchObj;

}
*/







let data = [
  { date: 2009 - 01 - 01, Apples: 130, Bananas: 40 },
  { date: 2010 - 01 - 01, Apples: 137, Bananas: 58 },
  { date: 2011 - 01 - 01, Apples: 166, Bananas: 97 },
  { date: 2012 - 01 - 01, Apples: 154, Bananas: 117 },
  { date: 2013 - 01 - 01, Apples: 179, Bananas: 98 },
  { date: 2014 - 01 - 01, Apples: 187, Bananas: 120 },
  { date: 2015 - 01 - 01, Apples: 189, Bananas: 84 },
]

let series = [
  [
    { key: "Apples", date: 2009 - 01 - 01, value: 130 },
    { key: "Apples", date: 2010 - 01 - 01, value: 137 },
    { key: "Apples", date: 2011 - 01 - 01, value: 166 },
    { key: "Apples", date: 2012 - 01 - 01, value: 154 },
    { key: "Apples", date: 2013 - 01 - 01, value: 179 },
    { key: "Apples", date: 2014 - 01 - 01, value: 187 },
    { key: "Apples", date: 2015 - 01 - 01, value: 189 },
  ],
  [
    { key: "Bananas", date: 2009 - 01 - 01, value: 40 },
    { key: "Bananas", date: 2010 - 01 - 01, value: 58 },
    { key: "Bananas", date: 2011 - 01 - 01, value: 97 },
    { key: "Bananas", date: 2012 - 01 - 01, value: 117 },
    { key: "Bananas", date: 2013 - 01 - 01, value: 98 },
    { key: "Bananas", date: 2014 - 01 - 01, value: 120 },
    { key: "Bananas", date: 2015 - 01 - 01, value: 84 },
  ]
]

let width = 500, height = 400;


// const svg = d3.select('svg');
// const g = svg.append('g');

// const detachedG = d3.create('svg:g');
// detachedG.selectAll('g')
//     .data([5,10,20,40])
//     .enter()
//     .append('rect')
//     .attr('fill', 'green')
//     .attr('x', d => d)
//     .attr('y', d => d)
//     .attr('height', d => d)
//     .attr('width', d => d);

// g.append(() => detachedG.node());
