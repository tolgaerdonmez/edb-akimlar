import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AkimPage } from "./pages/AkimPage";
import { Home } from "./pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Edebiyat akımları ve sanatçıları" />
        <meta property="og:title" content="Akımlar" />
        <meta property="og:description" content={"Edebiyat akımları ve sanatçıları"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="og.jpg" />
      </Helmet>
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
    </>
  );
}

export default App;
