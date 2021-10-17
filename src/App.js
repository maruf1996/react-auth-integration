import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import AuthProvider from './context/AuthProvider';
import Shipping from './component/Shipping/Shipping';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/shipping">
                <Shipping></Shipping>
              </PrivateRoute>
              <PrivateRoute path="/placeorder">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;