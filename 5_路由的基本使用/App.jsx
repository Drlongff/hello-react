import React, { Component } from 'react'
import Home from './components/Home'
import About from './components/About'
import { Link, Route,Routes } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生HTML中，使用a标签进行页面的跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* React中使用？？？进行路径的切换 */}
                            <Link className="list-group-item" to="./about">About</Link>
                            <Link className="list-group-item" to="./home">Home</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Routes>
                                    <Route path='/about' element={<About/>} />
                                    <Route path='/home' element={<Home/>} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
