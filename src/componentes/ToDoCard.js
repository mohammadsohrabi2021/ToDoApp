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
            {/* {todos.map(todo => ( */}
                <div style={{ border: 'ipx solid #000', margin: '20px' }}>
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
                    <button onClick={() => handeleDelete(todo.id)}>
                        delete
                    </button>
                    <button onClick={() => handleUpdate(todo)}>
                        upDate
                    </button>
                </div>
            {/* ))} */}
        </div>
    );
};

export default ToDoCard;