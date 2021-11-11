function TodoItem({ todo, onDelete, onCheck }) {
  return (
    <li style={{ textDecoration: todo.doneStatus ? 'line-through' : 'none' }}>
      {todo.title} --{todo.id}-- ={todo.doneStatus.toString()}=
      <button onClick={() => onDelete(todo.id)}>Delete me X</button>{' '}
      <button onClick={() => onCheck(todo.id)}>Check done</button>
    </li>
  );
}

export default TodoItem;
