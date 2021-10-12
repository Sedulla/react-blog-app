import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
