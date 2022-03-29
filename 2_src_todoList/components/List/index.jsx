import React, { Component } from 'react'
import './index.css'

import Item from '../Item'

export default class List extends Component {
  render() {
    const {todos,checkTodo,deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {todos.map((todoObj,)=>{
          return <Item key={todoObj.id} {...todoObj} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        })}
      </ul>
    ) 
  }
}
