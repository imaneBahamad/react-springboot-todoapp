import React, {Component} from 'react'
 
class ListTodosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos : [
                {id: 1, description: 'Complete React and Spring Boot Course', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn Spanish', done: false, targetDate: new Date()},
                {id: 3, description: 'Do some Sport', done: false, targetDate: new Date()},
            ]
        }
    }
    render(){
        return(
            <div className="ListTodosComponent">
                <h1>List of todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is completed ?</th>
                                <th>Target date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key = {todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;