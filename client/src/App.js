import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Search from "./pages/Search"

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" render={props =>
            <><Home />
              <Search />
            </>} />
          <Route path="/search" component={Search} />
          <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
          <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
