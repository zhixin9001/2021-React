import { Component } from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../actions.js';
import { connect } from 'react-redux';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      value: ''
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    const input = this.state.value;
    if (!input.trim()) {
      return;
    }

    this.props.onAdd(input);
    this.setState({ value: '' });
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
}
export default connect(null, mapDispatchToProps)(AddTodo);
