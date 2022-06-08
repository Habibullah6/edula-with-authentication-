import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Notfound from './components/Notfound/Notfound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
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
            <PrivateRoute exact path='/services'>
              <Services></Services>
            </PrivateRoute>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      <Footer></Footer>
    </div>

  );
}

export default App;
