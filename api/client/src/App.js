import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import { Context } from './context/Context';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import SinglePage from './pages/SinglePage';
import WritePage from './pages/WritePage';

function App() {
  const {user} = useContext(Context);

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
        <Route path="/register">
          {user ? <HomePage /> : <RegisterPage />}
        </Route>
        <Route path="/login">
        {user ? <HomePage /> : <LoginPage />}
        </Route>
        <Route path="/post/:id">
          <SinglePage />
        </Route>  
        <Route path="/write">
        {user ? <WritePage /> : <LoginPage />}
        </Route>  
        <Route path="/settings">
        {user ? <SettingsPage /> : <LoginPage />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
