import './App.css';
import icon_web from "./img/icon/browser.png"
import logo from "./img/ui/tw.png"
import log_out from "./img/icon/logout.png"
import Browser from "./component/Browser"
import click from './sfx/click.mp3';
import React, { useState } from 'react';
function App() {
  const [browser, setBrowserVisable] = useState(false);
  let audio = new Audio(click)
  const onKey = function (e) {
    if (e.code === "Escape") {
      setBrowserVisable(false)
      audio.play()
    }
  }
  const openBrowser = function () {
    setBrowserVisable(true)
  }

  return (
    <div className="App">
        <div className="desktop" tabIndex="0" onKeyDown={onKey} onClick={()=>{audio.play()}}>
       
          <div className="desktop-container">
          <img src={logo} className="logo"/>
            <div className="grid">
                <li onClick={openBrowser}>
                  <img src={icon_web}/>
                </li>
                <li className="logout">
                  <img src={log_out}/>
                </li>
            </div>
          </div>
          {browser ? <Browser/> : ""}
          
        </div>
    </div>
  );
}

export default App;
