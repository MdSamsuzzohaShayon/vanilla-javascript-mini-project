import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FaceApp from './components/FaceApp/FaceApp';
import ColorsData from './components/ColorsData/ColorsData';
import Menubar from './components/Menubar';
import React, {Component} from 'react';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />

        {/* FIRST EXAMPLE OF DRAWING A EMOJI  */}
        {/* <FaceApp /> */}


        {/* 2ND EXAMPLE OF COLORS DATA  */}
        <ColorsData />
      </div>
    )
  }
}

export default App;

