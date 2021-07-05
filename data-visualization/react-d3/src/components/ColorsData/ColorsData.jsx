import { Container, Message } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import MousePosition from './MousePosition';
import {message} from './message';

const csvUrl = "https://gist.githubusercontent.com/MdSamsuzzohaShayon/8a2aed8d276f038aee513dd0a5bea5f8/raw/colorsData.csv";








const componentStyle = {
    container: {
        border: '1px solid blue'
    },
    svg: {
        border: '1px solid blue'

    }

}









const ColorsData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // csv(csvUrl).then(data => {
        //     console.log("fetching data");
        //     setData(data);
        // });

        // DOING THE SAME THING 
        csv(csvUrl).then(setData)

    }, []); // KEEP THE DEPENDENCIES ARRAY BLANK IT WILL RENDER ONLY ONCE

    return (
        <Container style={componentStyle.container} >
            {/* <MousePosition /> */}
            <Message >{data ? message(data) : "loading"}</Message>
        </Container>
    )
}

export default ColorsData;

// 3:19:00