// https://observablehq.com/@d3/bubble-chart
import React, { Component } from 'react';
import * as d3 from 'd3';
import { Header } from 'semantic-ui-react';
import duke_data from '../../data/duke_data';
import unc_data from '../../data/unc_data';
import wakemade_data from '../../data/wakemade_data';
import { Container } from 'semantic-ui-react';
import './BubbleChart.css';


class BubbleChart extends Component {
    constructor(props) {
        super(props);
        this.el = React.createRef();
        this.width = 800;
        this.height = 600;

        this.dukeData = duke_data.map(record => { record.name = 'duke'; return record });
        this.uncData = unc_data.map(record => { record.name = 'unc'; return record });
        this.wakemadeData = wakemade_data.map(record => { record.name = 'wakemade'; return record });



        this.data = this.dukeData.concat(this.uncData, this.wakemadeData);
    }



    createSVG() {
        return d3.select(this.el).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('style', "border: thin red solid;");
    }


    drawChart(svg) {
        let data = this.data;
        d3.shuffle(data); // RANDOMIZE DATA 
        data.sort((a, b)=>{
            return a.avg_price - b.avg_price;
        });
        let hierarchalData = this.makeHierarchy(data);
        let packLayout = this.pack([this.width - 5, this.height - 5]);
        const root = packLayout(hierarchalData);

        const leaf = svg.selectAll("g")
            .data(root.leaves()) // Returns the array of leaf nodes in traversal order; leaves are nodes with no children.
            .enter()
            .append('g')
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`)
            .classed('unc', d => d.data.name === 'unc')
            .classed('duke', d => d.data.name === 'duke')
            .classed('wakemed', d => d.data.name === "wakemade")

        leaf.append("circle")
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7);
    }

    makeHierarchy(data) {
        return d3.hierarchy({ children: data })
            .sum(d => d.avg_price); // Evaluates the specified value function for this node and each descendant in post-order traversal, and returns this node
    }
    pack(size) {
        return d3.pack()
            .size(size)
            .padding(3)
    }

    componentDidMount() {
        let svg = this.createSVG();
        this.drawChart(svg)
    }


    render() {
        return (
            <div className="BubbleChart">
                <Container>

                    <Header as="h2">Bubble Chart</Header>
                    <div id="bubblechart" ref={el => (this.el = el)}></div>
                </Container>
            </div>
        );
    }
}

export default BubbleChart;
