import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import * as action from '../actions';
import { ALL, COMPLETED, NOT_COMPLETED } from '../../filter/actionTypes.js';

const TodoList = ({ todos, filter, onToggle, onRemove }) => (
  <ul>
    { filterTodos(todos, filter).map(
      todo =>
        <TodoItem key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)} />
    )}
  </ul>
);

const filterTodos = (todos, filter) => {
  switch (filter) {
    case ALL:
      return todos;
    case COMPLETED:
      return todos.filter(todo => todo.completed);
    case NOT_COMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => (
  {
    todos: state.todos,
    filter: state.filter
  }
);

const mapDispatchToProps = (dispatch) => ({
  onToggle: (id) => { dispatch(action.toggleTodo(id)) },
  onRemove: (id) => { dispatch(action.deleteTodo(id)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);