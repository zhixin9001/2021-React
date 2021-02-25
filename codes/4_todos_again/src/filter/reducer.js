import { ALL, COMPLETED, NOT_COMPLETED } from './actionTypes.js';

export default (state = ALL, action) => {
  switch (action.type) {
    case ALL: {
      return  ALL ;
    }
    case COMPLETED: {
      return COMPLETED ;
    }
    case NOT_COMPLETED: {
      return NOT_COMPLETED ;
    }
    default: {
      return state;
    }
  }
}