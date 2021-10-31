import { Switch, Route } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <h2>Consume GraphQL</h2>
      <Switch>
        <Route strict path='/search' component={Search} />
        <Route strict path='/:id' component={Character} />
        <Route strict path='/' component={CharactersList} />
      </Switch>
    </div>
  );
}

export default App;