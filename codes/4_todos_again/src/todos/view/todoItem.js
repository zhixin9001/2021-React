import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle, onRemove }) => (
  <li id={todo.id}>
    <input type="checkbox" checked={todo.completed ? "checked" : ""} onClick={onToggle} readOnly />
    <label>{todo.text}</label>
    <button onClick={onRemove}>Remove</button>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
