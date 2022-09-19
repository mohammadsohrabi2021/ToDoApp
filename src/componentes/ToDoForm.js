import React from 'react';

const ToDoForm = ({ form,  FormStatus,handleSubmit ,handleChange }) => {
    
    return (
            <div >
                <div style={{ margin: "20px"}}>
                    <form  onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input onChange={handleChange} name={'name'} value={form.name} style={{width:'100%'}} />
                        <label>lastName:</label>
                        <input onChange={handleChange} name={'lastName'} value={form.lastName} style={{width:'100%'}}/>
                        <button type={'submit'} style={{  marginTop: '20px', padding:'5px' ,cursor:'pointer'}}>
                            {FormStatus === 'add' ? 'submit' : 'update'}
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default ToDoForm;