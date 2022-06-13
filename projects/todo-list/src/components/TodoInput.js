import React, { useRef } from 'react';

function TodoInput(props) {
    const addTodo = props.addTodo;

    const inputRef = useRef();

    return (
        <div className="row">
            <div className="col-8">
                <input type="text" className="form-control" ref={inputRef} />
            </div>
            <div className="col-4">
                <button className="btn btn-block btn-primary" onClick={() => addTodo( inputRef.current.value )}>Add todo</button>
            </div>
            
        </div>
    );
}

export default TodoInput;