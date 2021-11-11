import { useReducer } from 'react';

// newTodoObj {id: 1, title: '', doneStatus: false }

const initTodos = [{ id: 1, title: 'Go to park', doneStatus: false }];

function todoReducer(todos, action) {}

function TodoListR() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  return (
    <section>
      <h2>TOdo list is great</h2>
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default TodoListR;
