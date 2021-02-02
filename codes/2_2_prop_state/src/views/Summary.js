import { Component } from 'react';
import PropTypes from 'prop-types';

function Summary({ value }) {
  return (
    <div>
      <span>total:{value}</span>
    </div>
  );
}

class SummaryContainer extends Component {
  constructor() {
    super(...arguments);
    this.getOwnState = this.getOwnState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = this.getOwnState();
  }

  getOwnState() {
    const state = this.context.store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum: sum };
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    return (
      <Summary value={this.state.sum} />
    );
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer;