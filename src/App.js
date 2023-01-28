import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Empresa from './Pages/Empresa'

function App() {

  return (
   <Router>
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/empresa">Empresa</link>
      </li>
      <li>
        <link to="/contato">Contato</link>
      </li>
    </ul>
    <Switch>
      <Route exat path="/">
        <Home />
      </Route>
      <Route path="/empresa">
        <Empresa />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
</Switch>
    
   </Router>
  );
}

export default App;