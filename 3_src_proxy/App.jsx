import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudent = () => {
        axios.get('http://localhost:3000/api1/students').then(
            resposne => {console.log('成功了！',resposne.data)},
            error => {console.log('失败了',error)}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudent}>点我获取学生的数据</button>
            </div>
        )
    }
}
