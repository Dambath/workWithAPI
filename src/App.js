import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Quotes from './containers/quotes';
import InfoQoutes from './containers/infoQoutes/index'
import Authors from './containers/authors/index'
import InfoAuthors from './containers/infoAuthors/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/quotes' component={Quotes}/> 
        <Route exact path='/quotes/:id' component={InfoQoutes} />
        <Route exact path='/authors' component={Authors} />
        <Route exact path='/authors/:id' component={InfoAuthors}/>
      </Switch>
    </Router>
  );
}

export default App;
