//引入React核心库
import React, { Component } from "react"
import Weather from "./components/Weather"
import Hello from "./components/Hello"

class App extends Component {
    render() {
        return (
            <div>
                <Weather />
                <Hello />
            </div>
        )
    }
}

export default App