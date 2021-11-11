import { useReducer, useState } from 'react';
import TodoItem from './TodoItem';

// newTodoObj {id: 1, title: '', doneStatus: false }

const initTodos = [
  { id: 1, title: 'Go to park', doneStatus: true },
  { id: 2, title: 'Go to Mall', doneStatus: false },
];

function todoReducer(todos, action) {
  // switch
  switch (action.type) {
    case 'ADD':
      return [...todos, action.payload];
    case 'DELETE':
      return todos.filter((t) => t.id !== action.payload);
    case 'CHECK':
      return todos.map((t) => {
        if (t.id === action.payload) return { ...t, doneStatus: !t.doneStatus };
        return t;
      });

    default:
      return todos;
  }
}

function TodoListR() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  const [newTodoTitle, setNewTodoTitle] = useState('');
  // lastId - apskaiciuota reiksme
  const lastTodoId = todos.length > 0 ? todos[todos.length - 1].id : 0;
  console.log('lastTodoId', lastTodoId);

  const handleNewTodo = () => {
    dispatch({ type: 'ADD', payload: generateTodo() });
  };

  const handleDeleteDispatch = (deleteId) => {
    console.log('handleDeleteDispatch', deleteId);
    dispatch({ type: 'DELETE', payload: deleteId });
  };

  const handleCheckDispatch = (checkId) => {
    dispatch({ type: 'CHECK', payload: checkId });
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
          <TodoItem
            onCheck={handleCheckDispatch}
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteDispatch}
          />
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
