import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js'

const buttonStyle = {
  margin: '10px'
};

function Counter({ caption, onIncrement, onDecrement, value }) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count:{value}</span>
    </div>
  );
}

class CounterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.caption]
    }
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  onClickIncrementButton() {
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }

  onClickDecrementButton() {
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    return (
      <Counter caption={this.props.caption}
        onIncrement={this.onClickIncrementButton}
        onDecrement={this.onClickDecrementButton}
        value={this.state.value}
      ></Counter>
    );
  }
}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer;