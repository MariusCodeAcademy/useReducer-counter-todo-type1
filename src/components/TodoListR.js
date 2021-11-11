import { useReducer, useState } from 'react';
import TodoItem from './TodoItem';

// newTodoObj {id: 1, title: '', doneStatus: false }

const initTodos = [
  { id: 1, title: 'Go to park', doneStatus: false },
  { id: 2, title: 'Go to Mall', doneStatus: false },
];

function todoReducer(todos, action) {
  // switch
  switch (action.type) {
    case 'ADD':
      return [...todos, action.payload];
    default:
      return todos;
  }
}

function TodoListR() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  const [newTodoTitle, setNewTodoTitle] = useState('');
  // lastId - apskaiciuota reiksme
  const lastTodoId = todos[todos.length - 1].id;
  console.log('lastTodoId', lastTodoId);

  const handleNewTodo = () => {
    dispatch({ type: 'ADD', payload: generateTodo() });
  };

  // helper fn
  function generateTodo() {
    return { id: lastTodoId + 1, title: newTodoTitle, doneStatus: false };
  }

  return (
    <section>
      <h2>TOdo list is great</h2>
      <input
        type='text'
        placeholder='Title'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button onClick={handleNewTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoListR;

// susikurti input el arba forma ir jos inputa susieti su state
//  <li>{todo.title}</li> paversti i <TodoItem todo={todo}  >
// Create state or get id increasing every time we add todo
// Create delete button next to every todo
// Create HandleDelete function that gets id and dispaches the delete action with id
