import HomePageLogin from "./Components/HomePageLogin";
import Input from "./utils/Input";
import "./css/login.css";
import "../src/css/default.css";
import Login from "./Components/Lgoin";
import DetailsPage from "./Components/DetailsPage";
import OrderPage from "./Components/OrderPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/HomePageLogin" component={HomePageLogin} />
          <Route  path="/OrderPage" component={OrderPage} />
          <Route exact path="/" component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
