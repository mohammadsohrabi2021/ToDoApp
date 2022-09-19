import React, { useState } from 'react';
import ToDoCard from './componentes/ToDoCard';
import ToDoForm from './componentes/ToDoForm';
function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "mohammad", state: false, lastName: 'sohrabi' },
    { id: 2, name: "ali", state: true, lastName: 'sohrabi' },
    { id: 3, name: "reza", state: false, lastName: 'sohrabi' },
    { id: 4, name: "milad", state: true, lastName: 'sohrabi' },
  ])
  const [form, setForm] = useState({ name: '', lastName: '' })
  const [FormStatus, setFormStatus] = useState('add')



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
const handleChange = event => {
  setForm({ ...form, [event.target.name]: event.target.value })
}

  return (
    <div >

      <ToDoForm handleChange={handleChange} handleSubmit={handleSubmit} form={form} formStatus={FormStatus} setForm={setForm} setTodos={setTodos} todos={todos} setFormStatus={setFormStatus} />
      {todos.map(todo => <ToDoCard todo={todo} todos={todos} setForm={setForm} setFormStatus={setFormStatus} setTodos={setTodos} />)}
    </div>
  );
}

export default App;
