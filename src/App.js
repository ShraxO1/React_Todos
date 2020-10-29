import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from "./components/pages/about";
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";

class App extends Component{
    state = {
        todos: [
            {
                id: 1,
                title: "take it",
                completed: false
            },
            {
                id: 2,
                title: "take it",
                completed: true
            },
            {
                id: 3,
                title: "take it",
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })});
    }

    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    addTodo = (title) => {
        const newTodo = {
            id: this.state.todos.length+1,
            title: title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }
    render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} delTodo = {this.delTodo } markComplete={this.markComplete}/>
                        </React.Fragment>
                    )}/>
                    <Route path="/about" component={About}/>
                </div>
        </Router>
    );
  }
}

export default App;