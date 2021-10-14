import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import SinglePage from './pages/SinglePage';
import Write from './pages/Write';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
