import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    state = {
        todos: []
    }

    addTodo = ( todo ) => {
        this.setState({
            todos: [ ...this.state.todos, todo ]
        });
    }

    deleteTodo = ( idx ) => {
        this.setState({
            todos: [
                ...this.state.todos.slice( 0, idx ),
                ...this.state.todos.slice( idx + 1 )
            ]
        })
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <h1>TodoList App</h1>
                <hr />
                <TodoInput addTodo={this.addTodo} />
                <TodoList todos={todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;