import React from "react";
import "./styles.css";

import MainNavbar from "./components/navigation/MainNavbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Faqs} from './components/Faqs';
import {Shop} from './components/Shop';
import { Error } from './components/Error';

const App = () => {
  return (
    <React.Fragment>
  <BrowserRouter>
  <MainNavbar/>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact-us" component={Contact} />
  <Route path="/faq" component={Faqs} />
  <Route path="/shop" component={Shop} />
  <Route component={Error} />
</Switch>
  </BrowserRouter>
</React.Fragment>
  
  );
};

export default App;