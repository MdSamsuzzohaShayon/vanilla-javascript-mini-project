import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FaceApp from './components/FaceApp/FaceApp';
import ColorsData from './components/ColorsData/ColorsData';
import Menubar from './components/Menubar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Segment, Container } from 'semantic-ui-react';
import ProjectList from './components/ProjectList';
import BubbleChart from './components/BubbleChart/BubbleChart';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Menubar />
        <br />
        <br />
        <br />
        <Container>
          <Segment >
            <ProjectList />
          </Segment>
        </Container>
          <Switch>
            <Route path="/faceapp">
              {/* FIRST EXAMPLE OF DRAWING A EMOJI  */}
              <FaceApp />
            </Route>
            <Route path="/colorsdata">
              {/* 2ND EXAMPLE OF COLORS DATA  */}
              <ColorsData />
            </Route>
            <Route path="/bubblechart">
              {/* 2ND EXAMPLE OF COLORS DATA  */}
              <BubbleChart />
            </Route>
          </Switch>
        </Router>


      </div>
    )
  }
}

export default App;
