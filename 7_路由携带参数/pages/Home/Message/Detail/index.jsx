import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(){
    const mockData = [
            {id:'001',title:'消息1',content:'我是你爹！'},
            {id:'002',title:'消息2',content:'我是你ba！'},
            {id:'003',title:'消息3',content:'我是你BA！'},
    ]
    const params = useParams()
    const {id,title} = params
    const result = mockData.find((detail)=> detail.id===id)
    return(
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{result.content}</li>
        </ul>
    )
}
