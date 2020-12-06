import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from "./Components/Projects/Projects";

function App() {
   const location = useLocation()
  return (
    <div className="App">
        <Navbar/>
        <AnimatePresence exitBeforeEnter >
         <Switch location={location} key={location.key}>
            <Route exact path='/'>
               <Home/>
            </Route>
            <Route path='/home'>
               <Home/>
            </Route>
            <Route path='/projects'>
               <Projects/>
            </Route>
            <Route path='/about'>
               <About/>
            </Route>
            <Route path='/contacts'>
               <Contacts/>
            </Route>
         </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
