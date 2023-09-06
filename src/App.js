import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import FlightList from './components/FlightList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search" component={Search}>
            <Search />
          </Route>
          <Route path="/flights" component={FlightList}>
            <FlightList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;