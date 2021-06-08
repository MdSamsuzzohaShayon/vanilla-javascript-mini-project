import React from 'react';
import { arc } from 'd3';
import { Container, Header } from 'semantic-ui-react';

// console.log(arc);


const width = 960, height = 500;
const centerX = width / 2, centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90, eyeOffsetY = 100;
const eyeRadious = 50;
const mouthWidth = 20;
const mouthRadius = 140;


// https://github.com/d3/d3-shape/blob/v2.1.0/README.md#_arc
const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2); // "M0,-100A100,100,0,0,1,100,0L0,0Z"



const FaceApp = () => {
    // console.log(mouthArc());
    return (
        <Container className="FaceApp">
            <br />
            <Header as='h3' color="green">Face app with react</Header>
            <br />
            <svg className="face-app" width={width} height={height}>
                <g transform={`translate(${centerX}, ${centerY})`}>
                    <circle
                        r={centerY - strokeWidth / 2}
                        // cy={centerY}
                        // cx={centerX}
                        fill="yellow"
                        stroke="black"
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        r={eyeRadious}
                        // cy={centerY - eyeOffsetY}
                        // cx={centerX - eyeOffsetX} 
                        cy={- eyeOffsetY}
                        cx={- eyeOffsetX}
                    />
                    <circle
                        r={eyeRadious}
                        // cy={centerY - eyeOffsetY}
                        // cx={centerX + eyeOffsetX}
                        cy={ - eyeOffsetY}
                        cx={ eyeOffsetX}
                    />
                    <path d={mouthArc()} />
                </g>
            </svg>
        </Container>
    )
}

export default FaceApp;
