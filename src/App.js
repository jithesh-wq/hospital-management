import './App.css';
import NavItem from './components/NavItem';
import DashBoard from './pages/DashBoard'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="appContainer">
        <div className="navContainer">
             <div className="logo">
                  <img className="logoImg" src="https://i.pinimg.com/originals/46/0b/ec/460bec2777fe7d4a4fec0dde54fdabde.png"/>
             </div>
             <ul className="navLinks">
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/">
                    <NavItem linkName="dashboard"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none'}} to="/covidCases">
                    <NavItem linkName="covid Cases"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none'}} to="/allpatients">
                    <NavItem linkName="all patients"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/admitpatient">
                    <NavItem linkName="admit"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/dischargepatient">
                    <NavItem linkName="discharge"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/updatepatient">
                    <NavItem linkName="update"/>
                  </NavLink>
                </li>
            </ul>
            <div className="bottomContainer">
              <ul className="navLinks">
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/updatepatient">
                        <NavItem linkName="logout"/>
                  </NavLink>
                </li>
              </ul>
            </div>
        </div>
        <div className = "pageContainer">
            <Route exact path="/" component={DashBoard}/>
            {/* <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/> */}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
