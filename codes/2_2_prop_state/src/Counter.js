import { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: props.initValue,
      err: "err"
    };
  }

  onClickIncrementButton() {
    this.setState({ count: this.state.count + 1 });
  }

  onClickDecrementButton() {
    this.setState({ count: this.state.count - 1 });
  }
  

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count:{this.state.count}{this.state.err}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
}

Counter.defaultProps = {
  initValue: 3
};

export default Counter;