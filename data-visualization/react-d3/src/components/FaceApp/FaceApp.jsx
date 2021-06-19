import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Face } from './Face';
import { range } from 'd3';


// console.log(arc);


const width = 160, height = 160;
// const centerX = width / 2, centerY = height / 2;
// const strokeWidth = 20;
// const eyeOffsetX = 90, eyeOffsetY = 100;
// const eyeRadious = 50;
// const mouthWidth = 20;
// const mouthRadius = 140;

const arrRange = range(6 * 3); // Returns an array containing an arithmetic progression, similar to the Python built-in range. This method is often used to iterate over a sequence of uniformly-spaced numeric values







const FaceApp = () => {
    let MultipleFace = () => arrRange.map((ar, arIdx) => (
        <Face
            key={arIdx}
            width={width}
            height={height}
            centerX={width / 2}
            centerY={height / 2}
            strokeWidth={6 + Math.random()* 3}
            eyeOffsetX={20 + Math.random() * 9}
            eyeOffsetY={20 + Math.random() * 15}
            eyeRadius={5 + Math.random() * 10}
            mouthWidth={7 + Math.random() * 9}
            mouthRadius={30 + Math.random() * 10}
        />
    ));
    // console.log(mouthArc());
    return (
        <Container className="FaceApp">
            <br />
            <Header as='h3' color="green">Face app with react</Header>
            <br />
            <MultipleFace />
        </Container>
    )
}

export default FaceApp;
