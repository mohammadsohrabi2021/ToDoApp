import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "mohammad", state: false, lastName: 'sohrabi' },
    { id: 2, name: "ali", state: true, lastName: 'sohrabi' },
    { id: 3, name: "reza", state: false, lastName: 'sohrabi' },
    { id: 4, name: "milad", state: true, lastName: 'sohrabi' },
  ])
  const [form, setForm] = useState({ name: '', lastName: '' })
  const [FormStatus, setFormStatus] = useState({ name: '', lastName: '' })
  const handeleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handelCheck = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, state: !todo.state } : todo))
  }
  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    if (FormStatus === 'add') {
      setTodos([...todos, { id: Math.floor(Math.random() * 1000), name: form.name, lastName: form.lastName, state: false }])
    }
    else {
      setTodos(todos.map(todo => todo.id === form.id ? form : todo))
    }
    setForm({ name: '', lastName: '' })
    setFormStatus('add')
  }
  const handleUpdate = todo => {
    setFormStatus('upDate')
    setForm(todo)
  }
  return (
    <div style={{ border: 'ipx solid #000', margin: '20px' }}>
      <div style={{ margin: "10px" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input onChange={handleChange} name={'name'} value={form.name} />
            <label>lastName:</label>
            <input onChange={handleChange} name={'lastName'} value={form.lastName} />
            <button type={'submit'}>
              submit
            </button>
          </form>
        </div>
      </div>
      {todos.map(todo => (
        <div>
          <div>
            id:{todo.id}
          </div>
          <div>
            name : {todo.name}
          </div>
          <div onClick={() => handelCheck(todo.id)}>
            state:{todo.state ? 'done' : 'not done'}
          </div>
          <div>
            lastName:{todo.lastName}
          </div>
          <button onClick={() => handeleDelete(todo.id)}>
            delete
          </button>
          <button onClick={() => handleUpdate(todo)}>
           upDate
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
