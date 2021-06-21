import { Container, Message } from 'semantic-ui-react';
import React, { useState } from 'react';
import { csv, csvFormat } from 'd3';
import MousePosition from './MousePosition';

const csvUrl = "https://gist.githubusercontent.com/MdSamsuzzohaShayon/8a2aed8d276f038aee513dd0a5bea5f8/raw/colorsData.csv";
const width = 960, height = 500;
// const circleX = width / 2, circleY = height / 2;







const componentStyle = {
    container: {
        border: '1px solid blue'
    },
    svg: {
        border: '1px solid blue'

    }

}



const message = data => data.length + " - Rows; " + data.columns.length + " - Columns; " + Math.round(csvFormat(data).length / 1024) + " - kB";






const ColorsData = () => {
    const [data, setData] = useState(null);
    csv(csvUrl).then(data => {
        setData(data);

    });
    return (
        <Container style={componentStyle.container} >
            {/* <MousePosition /> */}
            <Message >{data ? message(data) : "loading"}</Message>
        </Container>
    )
}

export default ColorsData;

// 3:35:00