import React, { Component } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item" href="./home-news.html">News</a> */}
              <NavLink className="list-group-item" to='/home/news'>news</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to='/home/message'>message</NavLink>
            </li>
          </ul>
          <div>
            <Routes>
              <Route path='/message/*' element={<Message />}></Route>
              <Route path='/news' element={<News />}></Route>
            </Routes>
          </div>
        </div>
      </div>

    )
  }
}
