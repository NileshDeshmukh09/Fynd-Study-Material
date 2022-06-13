import React from 'react';

function TodoList(props) {
    const todos = props.todos;
    const deleteTodo = props.deleteTodo;
    
    return (
        <div className="card my-4 py-4">
            <ul>
            {
                todos.map( ( todo, idx ) => (
                    <li key={todo} style={{ fontSize: '1.2em', lineHeight: '2' }}>
                        {todo}
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo( idx )}>&times;</button>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default TodoList;