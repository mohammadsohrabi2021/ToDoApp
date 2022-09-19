import React from 'react';

const ToDoCard = ({ todo, todos, setTodos, setFormStatus, setForm }) => {
    const handeleDelete = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handelCheck = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, state: !todo.state } : todo))
    }
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    return (
        <div >
                <div style={{ border: '1px solid #000', margin: '20px', padding:'10px' }}>
                    <div>
                        id:{todo.id}
                    </div>
                    <div>
                        name : {todo.name}
                    </div>
                    <div onClick={() => handelCheck(todo.id)} style={{curser:'pointer'}}>
                        state:{todo.state ? 'done' : 'not done'}
                    </div>
                    <div>
                        lastName:{todo.lastName}
                    </div>
                    <button onClick={() => handeleDelete(todo.id)}style={{  margin: '20px', padding:'5px',cursor:'pointer' }}>
                        delete
                    </button>
                    <button onClick={() => handleUpdate(todo)}style={{  margin: '20px', padding:'5px',cursor:'pointer'}}>
                        upDate
                    </button>
                </div>

        </div>
    );
};

export default ToDoCard;