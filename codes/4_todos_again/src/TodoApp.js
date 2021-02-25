import {view as Todos} from './todos';
import {view as Filter} from './filter';

function TodoApp () {
  return(
    <div>
      <Filter/>
      <Todos />
    </div>
  );
} 

export default TodoApp;