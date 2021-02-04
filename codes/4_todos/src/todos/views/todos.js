import AddTodo from './addTodo.js';
import TodoList from './todoList.js';
import './style.css';

export default () => (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
);