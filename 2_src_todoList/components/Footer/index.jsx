import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (e)=>{
    const {checkAll} = this.props
    const {checked} = e.target
    return checkAll(checked)
  }
  handleDelDone = ()=>{
    const {deleteDone} = this.props
    deleteDone()
  }
  render() {
    const {todos} = this.props
    const total = todos.length
    const doneTotal = todos.reduce((pre,cur)=>{
      return pre + (cur.done ? 1 : 0)
    },0)
    return (
      <div className="todo-footer" style={{display : todos.length===0 ? 'none' : 'block'}}>
        <label >
          <input type="checkbox" checked={total === doneTotal && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneTotal}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleDelDone}>清除已完成任务</button>
      </div>
    )
  }
}
