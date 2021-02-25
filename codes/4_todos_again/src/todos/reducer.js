import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionTypes.js';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
        , ...state];
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo;
        }
      });
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
}