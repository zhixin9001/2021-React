import { Component } from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../actions.js';
import { connect } from 'react-redux';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const value = this.state.value;
    if (!value.trim()) return;
    this.props.onAdd(value);
    this.setState({ value: '' });
  }

  render = () => (
    <div>
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} value={this.state.value} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  onAdd: text => { dispatch(addTodo(text)) }
});

export default connect(null, mapDispatchToProps)(AddTodo);