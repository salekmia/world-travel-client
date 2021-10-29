import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AddService from "./pages/AddService/AddService";
import AllBooking from "./pages/AllBooking/AllBooking";
import Booking from "./pages/Booking/Booking";
import Home from './pages/home/Home/Home';
import Login from "./pages/Login/Login";
import Mybooking from "./pages/Mybooking/Mybooking";
import Register from "./pages/Register/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/addservice">
            <AddService></AddService>
          </Route>

          <Route exact path="/booking/:serviceId">
            <Booking></Booking>
          </Route>

          <Route path="/allbooking">
            <AllBooking></AllBooking>
          </Route>

          <Route path="/mybooking">
            <Mybooking></Mybooking>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
