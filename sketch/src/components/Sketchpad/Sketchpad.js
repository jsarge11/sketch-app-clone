import React, { Component } from 'react';
import './sketchpad.css';

import Attributes from './Attributes/Attributes'
import Toolbar from './Toolbar/Toolbar'
import Projects from './Projects/Projects'
import shapes from './Functions/shapes'

class Sketchpad extends Component {
  render() {
    return (
      <div>
        <Toolbar />

        <div id="ske-lower-area">
        <Projects />
         <div id="ske-sketchpad">Sketchpad</div>
         <Attributes />
        </div>
      </div>
    );
  }
}

export default Sketchpad;
