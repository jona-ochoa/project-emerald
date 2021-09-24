import React from'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import  Home  from './pages/HomePages/Home';
import { Navbar } from './components';



function App() {
  return(
    <Router>
      <GlobalStyle />
       <Navbar />
       <Switch />
       <Route path="/" exact component ={Home} />
    </Router>
    
  );
}

export default App;
