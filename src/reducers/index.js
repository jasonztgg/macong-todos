import { combineReducers } from 'redux';
import todos from './todos';
// import wips from './wips';
// import dones from './dones';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos, // sub-reducer
  // wips, // work-in-progress
  // dones,
  visibilityFilter, // sub-reducer
});

// todos = (state, action) => {
//   case 'MOVE_TO_WIP':
//   case 'MOVE_TO_DONE':
//     return state.filter(todo => todo.id !== action.id);

// }
// wipReducer = (state, action) =>
//   swtich (action.type)
//     case 'MOVE_TO_WIP':
//       return [...state, action.todo]

// doneReducer = (state, action) =>

/*
- UI
  - buttons
  - TodoList
  - WipList
  - DoneList
- Action
  - FOO
- Reducer


*/
