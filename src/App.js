
import './App.css';

import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

import {Router, Switch} from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/> 
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component={Error}/>
    </Switch>

    </>
  );
}

export default App;
