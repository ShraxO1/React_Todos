import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }
    render() {
        const { id,title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this, id)}/> {' '}
                <p>{title}</p>
            </div>
        );
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default Todoitem;