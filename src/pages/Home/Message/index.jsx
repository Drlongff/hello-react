import React, { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '001', title: '消息1' },
            { id: '002', title: '消息2' },
            { id: '003', title: '消息3' },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            return (
                                <li key={message.id}>
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由 */}
                <Routes>
                    <Route path='/detail/:id/:title' element={<Detail />}></Route>
                </Routes>
            </div>
        )
    }
}
