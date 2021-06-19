import React from 'react';
import {List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const ProjectList = () => {
    return (
        <div className="ProjectList">
            <List horizontal animated divided verticalAlign='middle' size="big">
                <List.Item>
                    <List.Content>
                        <List.Header><Link to="/faceapp">Face App</Link></List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header><Link to="/colorsdata">Colors Data</Link></List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header><Link to="/bubblechart">Bubble Chart</Link></List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header><Link to="/">Home</Link></List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
}

export default ProjectList;
