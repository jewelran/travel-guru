// import logo from './Logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Booking from './Component/Booking/Booking';
import Blog from './Component/Blog/Blog';
import News from './Component/News/News';
import Discription from './Component/Discription/Discription';
import NotFound from './Component/NotFound/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <Route path = "/booking">
          <Booking></Booking>
        </Route>
        <Route path = "/blog">
          <Blog></Blog>
        </Route>
        <Route path = "/news">
          <News></News>
        </Route>
        <Route path = "/discription">
          <Discription></Discription>
        </Route>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
