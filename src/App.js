import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Routes from './Config/Routes'
import { AuthProvider } from "./ContextUser";
import AppRoutes from './Components/Routers/index';
import LinkNav from './Components/Nav/index'

// Styles
import './index.css'

function App() {
  return (
    <section className="main">
      <AuthProvider>
        {/* Routes */}
        <Router>
          <nav>
            <ul>
              {Routes.map((routeLink) =>(
                <li>
                  <LinkNav
                    key={routeLink.path}
                    path={routeLink.path}
                    isPrivate={routeLink.isPrivate}
                    nameLink={routeLink.name}
                  />
                </li>
              ))}
            </ul>
          </nav>
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