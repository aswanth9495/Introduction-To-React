import React from 'react';

function TodoList({ list, deleteItem }) {
  return (<div>
    <ul> 
      {list.map((todo, i) => {
        return (
          <li key={i}>
            {todo.item}
            <button onClick={() => deleteItem(todo.id)}>
              Delete
            </button>
          </li>
        )
      }
    )}
    </ul>
  </div>);
}

export default TodoList;