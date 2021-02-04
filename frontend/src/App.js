import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import UserCheckoutScreen from "./screens/UserCheckoutScreen";
import CartScreen from "./screens/CartScreen";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/cart" component={UserCheckoutScreen} />
          <Route path="/ord" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
