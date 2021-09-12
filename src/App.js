import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Routes from './Config/Routes'
import { AuthProvider } from "./Context";
import AppRoutes from './Components/index';


function App() {
  return (
    <section className="main">
      <AuthProvider>
        <nav>
          <ul>
            
          </ul>
        </nav>
        {/* Routes */}
        <Router>
          <Switch>
            {Routes.map((route) => (
              <AppRoutes
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
              />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    </section>
  );
}

export default App;