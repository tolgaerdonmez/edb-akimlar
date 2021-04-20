import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AkimPage } from "./pages/AkimPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/akimlar/:name?">
            <AkimPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
