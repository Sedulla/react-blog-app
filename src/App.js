import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';
import Write from './pages/Write';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route>
          <Write />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
