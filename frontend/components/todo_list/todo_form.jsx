import React, { Component } from 'react'


class TodoForm extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            id: Math.floor(Math.random() * 1000000),
            title: '',
            body: '',
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.updateDone = this.updateDone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state)
        this.setState({
            id: Math.floor(Math.random() * 1000000),
            title: '',
            body: '',
            done: ''
        });
    }

    updateTitle(e) {
        this.setState({ title: e.target.value})
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    updateDone(e) {
        this.setState({ done: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title
          <input
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                </label>
                <label>Body
          <input
                        type="text"
                        value={this.state.body}
                        onChange={this.updateBody}
                    />
                </label>
                <label>Done?
          <input
                        type="checkbox"
                        value={this.state.done}
                        onChange={this.updateDone}
                    />
                </label>
                <input type="submit" value="Add Todo" />
            </form>
        )
    }
}

export default TodoForm;