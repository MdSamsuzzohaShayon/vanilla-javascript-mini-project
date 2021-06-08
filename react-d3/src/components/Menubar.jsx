import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

export class Menubar extends Component {
    render() {
        return (
            <div className="Menubar"> 

            <Menu>
                <Container>
                    <Menu.Item header>Our Company</Menu.Item>
                </Container>
            </Menu>
            </div>
        )
    }
}

export default Menubar;
