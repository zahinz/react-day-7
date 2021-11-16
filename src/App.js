import SignIn from "./pages/signIn";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={SignIn} exact></Route>
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

const mapStateToProp = (state) => ({
  isSignedIn: state.signin.isSignedIn,
});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(App);
