import React from 'react';
import { arc } from 'd3';

export const Mouth = ({ mouthRadius, mouthWidth }) => {
    // https://github.com/d3/d3-shape/blob/v2.1.0/README.md#_arc
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2); // "M0,-100A100,100,0,0,1,100,0L0,0Z"


    return <path d={mouthArc()} />;
};

