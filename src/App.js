import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
      
      <NavBar></NavBar>
      
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route exact path='/home'>
            <Home></Home>
        </Route>
        <Route exact path='/about'>
            <About></About>
        </Route>
        <Route exact path='/services'>
            <Services></Services>
        </Route>
        <Route exact path='/contact'>
             <Contact></Contact>
        </Route>
        <Route>
            <Notfound></Notfound>
        </Route>
      </Switch>
    </BrowserRouter>
    <Footer></Footer>
    </div>
    
  );
}

export default App;
