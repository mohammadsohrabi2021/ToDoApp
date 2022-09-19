import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "mohammad", state: false, dec: 'import' },
    { id: 2, name: "ali", state: true, dec: 'import' },
    { id: 3, name: "reza", state: false, dec: 'import' },
    { id: 4, name: "milad", state: true, dec: 'import' },
  ])
  const handeleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handelCheck = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, state: !todo.state } : todo))
  }
  return (
    <div style={{border:'ipx solid #000',margin:'20px'}}>
      {todos.map(todo => (
        <div>
          <div>
            id:{todo.id}
          </div>
          <div>
            name : {todo.name}
          </div>
          <div onClick={()=>handelCheck(todo.id)}>
            state:{todo.state?'done' :'not done'}
          </div>
          <div>
            des:{todo.dec}
          </div>
          <button onClick={() => handeleDelete(todo.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
