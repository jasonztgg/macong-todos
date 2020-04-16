// Reducer
// (currentState, action) => newState;

// ({ weather: null, weatherList: null, zipcode: '27403' }, { type: 'UPDATE_ZIPCODE', payload: { zipcode: '98107' } })
// => return { weather: null, weatherList: null, zipcode: '98107' }

// state = [1]
const todos = (state = [], action) => {
  // state = { a: 1, b: 2 }
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    default:
      return state;
  }
};

export default todos;
