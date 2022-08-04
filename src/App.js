import './App.css';
import Projects from './components/Projects/Projects';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
         <Route path="/">
         <Home></Home>
         </Route>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route path="/about">
         <About></About>
         </Route>
         <Route path="/projects">
         <Projects></Projects>
         </Route>
         <Route path="/skills">
         <Skills></Skills>
         </Route>
        </Switch>
        <Route path="/footer">
         <Footer></Footer>
         </Route>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
