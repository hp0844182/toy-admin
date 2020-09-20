import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BasicLayout from "src/components/basic-layout";

export interface AppProps {
  [propName: string]: any;
}
const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={BasicLayout} />
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
