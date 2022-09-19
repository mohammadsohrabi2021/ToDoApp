import React from 'react';

const ToDoForm = ({ form,  FormStatus,handleSubmit ,handleChange }) => {
    
    return (
            <div style={{ margin: "10px" }}>
                <div>
                    <form  onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input onChange={handleChange} name={'name'} value={form.name} />
                        <label>lastName:</label>
                        <input onChange={handleChange} name={'lastName'} value={form.lastName} />
                        <button type={'submit'} >
                            {FormStatus === 'add' ? 'submit' : 'update'}
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default ToDoForm;