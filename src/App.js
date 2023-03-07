import logo from './logo.svg';
import pokeDex from './Pokedex';
import PokeCard from './Pokecard';
import './App.css';

function App() {
  const pokemon = pokeDex.map((p,id) => < PokeCard key={id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>)
  
  return (
    <div className="App">
      <header className="App-header">
        {pokemon}
      </header>
    </div>
  );
}

export default App;
