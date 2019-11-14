import React from 'react';
import './Task.css';

const Task = props => {
    return(
        <div className='card'>
            <p className='text-ready'>{props.text}</p>
            <button onClick={props.removeTask} className='btn-remove'><i className="fas fa-book-dead"></i></button>
        </div>
    )
};

export default Task;