import React from'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages/HomePages/Home';
import About from './pages/AboutUs/AboutUs';
import Projects from './pages/Projects/Projects';
import Feedback from './pages/Feedback/Feedback';
import Support from './pages/Support/Support';

import { Navbar } from './components';



function App() {
  return(
    <Router>
      <GlobalStyle />
       <Navbar />
       <Switch />
       <Route path="/" exact component ={Home} />
       <Route path="/about-us" component ={About} />
       <Route path="/projects" component ={Projects} />
       <Route path="/feedback" component ={Feedback} />
       <Route path="/support"  component ={Support} />

    </Router>
    
  );
}

export default App;
