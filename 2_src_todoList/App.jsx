//引入React核心库
import React, { Component } from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

import './App.css'


class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭🍚', done: false },
      { id: '002', name: '睡觉😴', done: true },
      { id: '003', name: '打豆豆', done: false },
    ]
  }

  //状态在哪里，操作状态的方法就在那里
  addTodo = (todoObj) => {
    let { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  //勾选or取消勾选一个todo的回调
  checkTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodos })
  }

  //删除一个todo
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    }
    )
    this.setState({ todos: newTodos })
  }

  //全选or取消全选
  checkAll = (done)=>{
    const { todos } = this.state
    const newTodos = todos.map((todo)=>{
      return {...todo,done}
    })
    this.setState({todos:newTodos})
  }

  //清除已完成
  deleteDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos}  checkAll={this.checkAll} deleteDone={this.deleteDone}/>
        </div>
      </div>
    )
  }
}

export default App