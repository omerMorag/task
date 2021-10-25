import { Switch, Route } from "react-router";
import routes from "./routes";

function App() {
  return (
    <div className="App">
                   <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                  />
                ))}
              </Switch>
    </div>
  );
}

export default App;
