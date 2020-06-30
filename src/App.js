import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import TrainingContextProvider from "./contexts/TrainingContext";
import './App.css';

const About = lazy(() => import('./components/About'));
const Navbar = lazy(() => import('./components/Navbar'));
const Katas = lazy(() => import('./components/Katas'));
const Contact = lazy(() => import('./components/Contact'));
const Arena = lazy(() => import('./components/Arena'));
const Profile = lazy(() => import('./components/Profile'));


const App = () => {
  return (
    <TrainingContextProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Arena} />
            <Route path='/katas' component={Katas} />
            <Route path='/profile' component={Profile} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    </TrainingContextProvider>
  );
};

export default App;