import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import BasicLayout from "src/components/basic-layout";
import { config } from "src/global";

// passes i18n down to react-i18next
i18n.use(initReactI18next).init(config);
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
