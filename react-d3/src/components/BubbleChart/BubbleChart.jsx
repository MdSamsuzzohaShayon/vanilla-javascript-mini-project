// https://observablehq.com/@d3/bubble-chart
import React, { Component } from 'react';
import * as d3 from 'd3';
import { Header } from 'semantic-ui-react';
import data_drg from '../../data';


class BubbleChart extends Component {
    constructor(props) {
        super(props);
        this.el = React.createRef();
    }



    createSVG() {
        return d3.select(this.el).append('svg')
            .attr('width', 400)
            .attr('height', 400)
            .attr('style', "border: thin red solid;");
    }


    drawChart(svg) {
        let hierarchalData = this.makeHierarchy(data_drg);
        let packLayout = this.pack([400 - 5, 400 - 5]);
        const root = packLayout(hierarchalData);

        const leaf = svg.selectAll("g")
            .data(root.leaves()) // Returns the array of leaf nodes in traversal order; leaves are nodes with no children.
            .join("g")
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

        leaf.append("circle")
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7)
            .attr("fill", 'navy');
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
                <Header as="h2">Bubble Chart</Header>
                <div id="bubblechart" ref={el => (this.el = el)}></div>
            </div>
        );
    }
}

export default BubbleChart;
