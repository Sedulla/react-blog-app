import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import SinglePage from './pages/SinglePage';
import WritePage from './pages/WritePage';

function App() {
  const currentUser = true;

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
          {currentUser ? <HomePage /> : <RegisterPage />}
        </Route>
        <Route path="/login">
        {currentUser ? <HomePage /> : <LoginPage />}
        </Route>
        <Route path="/post/:id">
          <SinglePage />
        </Route>  
        <Route path="/write">
        {currentUser ? <WritePage /> : <LoginPage />}
        </Route>  
        <Route path="/settings">
        {currentUser ? <SettingsPage /> : <LoginPage />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
