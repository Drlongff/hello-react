import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouseIn: false
    }
    handleChange = (id) => {
        return (e) => {
            const { checkTodo } = this.props
            const done = e.target.checked
            checkTodo(id, done)
        }
    }

    handleMouse = (flag) => {
        return () => {
            if (flag) {
                this.setState({ mouseIn: true })
            }
            else {
                this.setState({ mouseIn: false })
            }
        }
    }

    handleDelete = (id) => {
        const {deleteTodo} = this.props
        /* eslint-disable */
        if(confirm('确定删除吗？')){
            deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouseIn } = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouseIn ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouseIn ? 'block' : 'none' }} onClick={()=>this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
