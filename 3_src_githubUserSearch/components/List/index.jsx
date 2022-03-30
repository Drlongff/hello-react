import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {
        users:[],
        isLoading:false,
        isFirst:true,
        errMsg:''
    }

    componentDidMount(){
        //订阅消息
        this.token = PubSub.subscribe('hehe',(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        //取消订阅
        PubSub.unsubscribe(this.token)
    }
    render() {
        const { users,isLoading,isFirst,errMsg } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用！</h1> :
                    isLoading ? <h1>正在加载中...</h1> :
                    errMsg ? <h1>{errMsg.message}</h1> :
                    users.map((user,index)=>{
                        return(
                            <div className='card' key={index}>
                                <a href={user.html_url}>
                                    <img src={user.avatar_url} style={{width:'100px'}} alt="pic"/>
                                </a>
                                <p className='card-text'>{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
