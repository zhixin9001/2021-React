import { Component } from 'react';
import CounterContainer from './Counter.js';
import SummaryContainer from './Summary.js';
import Counter1 from './Counter1.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter1 caption="First"/>
        <Counter1 caption="Second"/>
        <Counter1 caption="Third"/>
        <hr />
      </div>
    );
  }
}

export default ControlPanel;