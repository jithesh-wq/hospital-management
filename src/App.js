import './App.css';
import Count from './components/Count';
import Doctor from './components/Doctor';
import Notification from './components/Notification';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Doctor/>
        <Count/>
        <Notification/>
      </div>
    </HashRouter>
  );
}

export default App;
