import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  searchUser = () => {
    // this.props.updateAppState({ isLoading: true, isFirst: false })
    PubSub.publish('hehe',{ isLoading: true, isFirst: false })
    axios.get(`https://api.github.com/search/users?q=${this.username.value}`).then(
      response => {
        // this.props.updateAppState({ isLoading: false, users: response.data.items })
        PubSub.publish('hehe',{ isLoading: false, users: response.data.items })
      },
      error => {
        console.log('失败了！', error);
        // this.props.updateAppState({ isLoading: false, errMsg: error.message })
        PubSub.publish('hehe',{ isLoading: false, errMsg: error.message })
      }
    )

  }
  onKeyDown
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Github用户搜索</h3>
          <div>
            <input ref={(c) => { this.username = c }} type="text" placeholder="输入用户名以搜索" />&nbsp;
            <button onClick={this.searchUser}>搜索</button>
          </div>
        </section>
      </div>
    )
  }
}
