import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import "./App.css"

import About from './pages/About/About';
import Manage from './pages/Manage/Manage';
import Home from './pages/Home/Home';
import Classroom from './pages/Classroom/Classroom';
import Discussion from './pages/Discussion/Discussion';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/footer';
import FingerBtn from './Components/fingerBtn/fingerBtn';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main className="paddingMainTop">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/Classroom" exact>
          <Classroom />
        </Route>
        <Route path="/discussion" exact>
          <Discussion/>
        </Route>
        <Route path="/manage" exact>
          <Manage/>
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
      <Footer />
      <FingerBtn/>
      </Router>
  );
}

export default App;
