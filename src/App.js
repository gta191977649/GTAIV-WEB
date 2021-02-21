import './App.css';
import icon_web from "./img/icon/browser.png"
import log_out from "./img/icon/logout.png"
import Browser from "./component/Browser"

function App() {
  return (
    <div className="App">
        <div className="desktop">
       
          <div className="desktop-container">
            <div className="grid">
                <li>
                  <img src={icon_web}/>
                </li>
                <li className="logout">
                  <img src={log_out}/>
                </li>
            </div>
          </div>
          <Browser/>
        </div>
    </div>
  );
}

export default App;
