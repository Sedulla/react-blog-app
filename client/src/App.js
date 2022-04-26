import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Context } from './context/Context';
import { HomePage } from './views/HomePage';
import { LogIn } from './views/LogIn';
import { SignUp } from './views/SignUp';
import { SettingsPage } from './views/SettingsPage';
import { SinglePage } from './views/SinglePage';
import { Write } from './views/WritePage';

export const App = () => {
  const { user } = useContext(Context);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/posts">
          <HomePage />
        </Route>
        <Route path="/register">{user ? <HomePage /> : <SignUp />}</Route>
        <Route path="/login">{user ? <HomePage /> : <LogIn />}</Route>
        <Route path="/post/:id">
          <SinglePage />
        </Route>
        <Route path="/write">{user ? <Write /> : <LogIn />}</Route>
        <Route path="/settings">{user ? <SettingsPage /> : <LogIn />}</Route>
      </Switch>
    </Router>
  );
};
