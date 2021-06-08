import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FaceApp from './components/FaceApp';
import Menubar from './components/Menubar';
import React, {Component} from 'react';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <FaceApp />
      </div>
    )
  }
}

export default App;

