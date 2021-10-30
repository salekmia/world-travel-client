import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import About from "./pages/About/About";
import AddService from "./pages/AddService/AddService";
import AllBooking from "./pages/AllBooking/AllBooking";
import Booking from "./pages/Booking/Booking";
import Home from './pages/home/Home/Home';
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Mybooking from "./pages/Mybooking/Mybooking";
import Register from "./pages/Register/Register";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute exact path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>

          <PrivateRoute path="/allbooking">
            <AllBooking></AllBooking>
          </PrivateRoute>

          <PrivateRoute path="/mybooking">
            <Mybooking></Mybooking>
          </PrivateRoute>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
