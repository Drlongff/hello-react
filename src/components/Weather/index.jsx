import React,{Component} from "react";
import './index.css'

class Weather extends Component{
    state = {
        isHot:true
    }
    change = ()=>{
        let isHot = this.state.isHot
        this.setState({isHot:!isHot})
    }
    render(){
        return(
            <div>
                <h2 onClick={this.change} className="weather">
                    今天天气很{this.state.isHot ? '炎热' : '凉爽'}
                </h2>
            </div>
        )
    }
}

export default Weather