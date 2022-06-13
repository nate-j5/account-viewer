import "./App.css";
import WalletCard from "../src/components/WalletCard";
import Footer from "./components/Footer";
import StartScreen from "./components/StartScreen";
import NoInstall from "./components/NoInstall";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <StartScreen />
            </Route>
            <Route exact path="/wallet">
              <WalletCard />
            </Route>
            <Route exact path="/noinstall">
              <NoInstall />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
