import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input type="text" onChange={this.onChange} value={this.state.title} placeholder='Add Todo...' name="title" style={{flex: '10', padding: '5px'}}
                    />
                    <input type="submit" value="Submit" className="btn btn-success" style={{flex: '1'}}
                    />
                </form>
            </div>
        );
    }
}


export default AddTodo;