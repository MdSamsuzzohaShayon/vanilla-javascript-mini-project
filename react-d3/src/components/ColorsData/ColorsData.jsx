import { Container, Header } from 'semantic-ui-react';
import React, { useState, useCallback } from 'react';
import { csvParse } from 'd3';

const csvUrl = "https://gist.githubusercontent.com/MdSamsuzzohaShayon/8a2aed8d276f038aee513dd0a5bea5f8/raw/colorsData.csv";
const width = 960, height = 500;
// const circleX = width / 2, circleY = height / 2;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };




const fetchText = async (url) => {
    const response = await fetch(url, { method: "GET" });
    return await response.text();
}
fetchText(csvUrl).then(text => {
    // console.log(csvParse(text));
});


const ColorsData = () => {
    const [mousePosition, setMousePosition] = useState(initialMousePosition);


    const handleMouseMove = useCallback(event => {
        // console.log("Mouse moved", event);
        const { clientX, clientY } = event;
        // console.log({ clientX, clientY });
        setMousePosition({ x: clientX, y: clientY });
    }, [setMousePosition]);

    return (
        <Container >
            <br />
            <Header as="h3" variant="green">Color Data Flow</Header>
            <br />
            <svg className="svg-chart" onMouseMove={handleMouseMove} width={width} height={height}>
                <circle
                    cx={mousePosition.x}
                    cy={mousePosition.y}
                    r={circleRadius}
                />
            </svg>
        </Container>
    )
}

export default ColorsData;

