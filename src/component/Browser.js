import "./Browser.css"
import React, { Component } from 'react'
import Iframe from 'react-iframe'
export default class browser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buffer:"https://www.bilibili.com",
            url:""
        }
    }
    componentDidMount(){
        this.setState({url:this.state.buffer})
    }
    render() {
        return (
            <div className="browser" tabIndex="0" onKeyDown={(e)=>{
                if (e.code === "Enter") {
                    this.setState({url:this.state.buffer})
                }
            }}>
                <div className="header">
                    <div className="controls">
                        <input type="text" value={this.state.buffer} onChange={(e)=>{
                            this.setState({buffer:e.target.value})
                        }}/>
                        <a className="btn_nav_prev" href="#"></a>
                        <a className="btn_nav_next" href="#"></a>
                        <a className="btn_mail" href="#"></a>
                        <a className="btn_home" href="#"></a>
                    </div>
                </div>
                <Iframe url={this.state.url}
                    width="100%"
                    height="100%"
                    id="myId"
                    sandbox="allow-popups-to-escape-sandbox	allow-scripts allow-same-origin"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
            </div>
        )
    }
}