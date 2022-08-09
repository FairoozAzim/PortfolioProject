import './App.css';
import Projects from './components/Projects/Projects';

import Home from './Pages/HomePage/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route path="/">
         <Home></Home>
         </Route>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route path="about">
         <About></About>
         </Route>
         <Route path="projects">
         <Projects></Projects>
         </Route>
         <Route path="contact">
          <Contact></Contact>
         </Route>
        </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
