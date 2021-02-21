import "./Browser.css"
import React, { Component } from 'react'
import Iframe from 'react-iframe'
export default class browser extends Component {
    render() {
        return (
            <div className="browser">
                <div className="header">
                    <div className="controls">
                        <input type="text" value="https://www.bilibili.com"/>
                        <a className="btn_nav_prev" href="#"></a>
                        <a className="btn_nav_next" href="#"></a>
                        <a className="btn_mail" href="#"></a>
                        <a className="btn_home" href="#"></a>
                    </div>
                </div>
                <Iframe url="https://www.bilibili.com/"
                    width="100%"
                    height="100%"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
            </div>
        )
    }
}