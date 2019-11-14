import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = props => {
  return(
      <div className='form-block'>
      <input className='text' value={props.currentText} type='text' onChange={props.onChange}/>
      <button onClick={props.plusTask} className='btn'>Add</button>
      </div>
  )
};

export default AddTaskForm;