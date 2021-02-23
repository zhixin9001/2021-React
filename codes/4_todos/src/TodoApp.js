import React from 'react';
import { view as Todos } from './todos/';
import { view as Filter } from './filter/';
import CountDown from './countdown.js';

function TodoApp() {
  return (
    <div>
      <Todos />
      <Filter />

      <CountDown startCount={10}>
        {
          (count) => (<div>{count}</div>)
        }
      </CountDown>
    </div>
  );
}

export default TodoApp;
