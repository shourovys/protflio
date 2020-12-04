import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
             <Home/>
          </Route>
          <Route path='/home'>
             <Home/>
          </Route>
          <Route path='/about'>
             <About/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
