import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Facts from './containers/facts/index';
import FactDetail from './components/fact-detail'
import Facts10 from './containers/facts/10facts'
import Facts15 from './containers/facts/15facts'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/facts5' component={Facts}/>
          <Route exact path='/facts/:id' component={FactDetail}/>
          <Route exact path='/facts10' component={Facts10}/>
          <Route exact path='/facts15' component={Facts15}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
