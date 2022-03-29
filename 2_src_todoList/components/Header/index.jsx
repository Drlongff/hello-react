import React, { Component } from 'react'
//引入 nanoid
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  //按下键盘的回调
  handleKeyUp = (e) => {
    const { keyCode,target } = e
    if (keyCode !== 13) return
    const {value:name} = target
    //生成todo对象
    const todoObj = {id:nanoid(),name:name,done:false}
    this.props.addTodo(todoObj)
    //清空用户输入
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
