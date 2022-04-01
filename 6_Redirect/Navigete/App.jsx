import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes, NavLink, Navigate } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生HTML中，使用a标签进行页面的跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* React中使用？？？进行路径的切换 */}
                            <NavLink className="list-group-item" to="./about">About</NavLink>
                            <NavLink className="list-group-item" to="./home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Routes>
                                    <Route path='*' element={<Navigate to="/home"/>}></Route>
                                    <Route path='/about' element={<About />} />
                                    <Route path='/home' element={<Home />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
